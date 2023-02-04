// utils
import { fetchWords } from "../utils/fetch-words.utils";
import { setInDataBase } from "../utils/set-in-database.utils";
import { memo } from "react";

// hooks
import { useEffect, useState, useMemo } from "react";
import { useRandom } from "../hooks/random.hook";
import { useSelector, useDispatch } from "react-redux";

// actions
import { setQuestionsAction } from "../store/quiz/quiz.actions";
import { addCorrectAnswerAction } from "../store/quiz/quiz.actions";
import { addWrongAnswerAction } from "../store/quiz/quiz.actions";
import { addUnasweredQuestion } from "../store/quiz/quiz.actions";

// components
import { Question } from "../components/Question";
import { If } from "../components/If";
import { Else } from "../components/Else";

const QuestionMemo = memo(Question);

// we use this function to get value from the store we write it here for sake of optimization
const getQuiz = (store) => {
  return store.quiz;
};

export default function Quiz() {
  // redux
  const quiz = useSelector(getQuiz);
  const dispatch = useDispatch();

  // values we use are stored insied question reducer which names as quiz
  // inside combine reducers
  const { questions, correctAnswers, wrongAnswers, unanswereds } = quiz;

  // index of the question
  let [currentIndex, setCurrentIndex] = useState(0);
  let [question, setQuestion] = useState({});
  // random spelling which we show to the user
  let randomWord = useRandom(question, [questions, currentIndex]);
  // variable we use to store the user's score
  let [score, setScore] = useState(0);
  // fastest time that user answered to a question
  let [answerRate, setAnswerRate] = useState(30);
  let [isFinished, setIsFinished] = useState(false);
  let [isLoading, setIsLoading] = useState(true);

  // props we use fo displaying information to question component
  let props = useMemo(() => {
    return {
      answerRate: answerRate,
      score: score,
      randomWord: randomWord,
      currentIndex: currentIndex,
      length: 30,
      handler: handleAnswer,
    };
  }, [question]);

  // fetch the word's from supabse then set it in our store
  useEffect(() => {
    //fetchs the word list from data base
    const $fetch = fetchWords();
    // variable $fetch returns an promise
    $fetch
      .then((arr) => {
        if (arr.length) {
          dispatch(setQuestionsAction(arr));
        }
        setQuestion(arr[currentIndex]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isFinished) {
      let data = {
        id: null,
        quiz_date: new Date(),
        rights: correctAnswers,
        wrongs: wrongAnswers,
        unanswered: unanswereds,
      };

      setInDataBase(data);
    }
  }, [isFinished]);

  // fucntion we use to find out of the user's answer was true or not
  function handleAnswer(userAnsewer, userAnswerRate) {
    // checks if shown word has right spelling or not
    const trueAnswer = question.rightSpelling === randomWord;
    // userAnswer would be a boolean that represents the user's judgement about
    // seplling we show to user if we get if value of userAnswer and trueAnswer where the same
    // we set it give user 10 points otherwise we get 10 points from user
    // undefined is for when user dosen't answered the question
    if (userAnsewer !== undefined) {
      if (trueAnswer === userAnsewer) {
        setScore((score) => score + 10);
        //dispatch an action that sets the store's rights
        dispatch(addCorrectAnswerAction(question));
      } else {
        setScore((score) => score - 5);
        //dispatch an action that sets the store's wrongs
        dispatch(addWrongAnswerAction(question));
      }
    } else {
      //dispatch an actions that sets the strore's unanswereds
      dispatch(addUnasweredQuestion(question));
    }

    if (currentIndex <= questions.length - 1) {
      // checks if the fastest answerRate recorded is
      // higher than the new answerRate if it was then set answerRate
      // to the new answer rate
      if (userAnswerRate < answerRate) {
        setAnswerRate(userAnswerRate);
      }
      if (currentIndex < questions.length - 1) {
        // if user is not solving the last question then
        // it goes to next question
        setCurrentIndex((index) => index + 1);
        setQuestion(questions[currentIndex + 1]);
      } else {
        // if user was on last question
        // if finished the exam our answered the last one
        // it goes to the Result page
        setIsFinished(true);
      }
    }
  }
  /*
    in order to have nicer more readable code i made an component called
    the if and another called the else that handle conditional renderings
    if renders a component if a condition is true and else renders it when
    condition is false 
  */
  return (
    <>
      <If condition={!isLoading}>
        <If condition={!isFinished}>
          <QuestionMemo {...props} />
        </If>
        <Else condition={!isFinished}>
          <h1>Done!</h1>
        </Else>
      </If>
      <Else condition={!isLoading}>
        <h1>Loading...</h1>
      </Else>
    </>
  );
}