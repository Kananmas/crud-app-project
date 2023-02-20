// utils
import { setInDataBase } from "../../utils/set-in-database.util";

// hooks
import { useEffect, useState } from "react";
import { useRandom } from "../../hooks/random.hook";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { memo } from "react";

// actions
import {
  decreaseScoreAction,
  incraeseScoreAction,
  addCorrectAnswer,
  addWrongAnswer,
  addUnasweredQuestion,
  startLoadingAction,
  setFastestAnswerAction,
} from "../../store/quiz/quiz.actions";

// components
import { Question } from "./components/Question";
import { If } from "../../components/If";
import { Else } from "../../components/Else";

// global components
import { LoadingSpinner } from "../../components/LoadingSpinner";
import {
  blankDataCreator,
  standardDataCreator,
  storeRightAnswerData,
  storeUnansweredData,
  storeWrongAnswerData,
} from "./utils/store-extradata.util";

const QuestionMemo = memo(Question);

// we use this function to get value from the store we write it here for sake of optimization
const getQuiz = (store) => {
  return store.quiz;
};

export function Quiz() {
  // redux
  const quiz = useSelector(getQuiz);
  const dispatch = useDispatch();
  const History = useHistory();

  // values we use are stored insied question reducer which names as quiz
  // inside combine reducers
  const {
    questions,
    loading: isLoading,
    score,
    wrongAnswers,
    rightAnswers,
    unanswereds,
    quizId,
    fastestAnswer,
  } = quiz;

  // index of the question
  let [currentIndex, setCurrentIndex] = useState(0);
  let [question, setQuestion] = useState({});
  // random spelling which we show to the user
  let randomWord = useRandom(question, [question, currentIndex]);
  // fastest time that user answered to a question
  let [answerRate, setAnswerRate] = useState(30);
  let [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const lastQuiz = localStorage.getItem("lastQuizDate");
    if (lastQuiz) {
      if (lastQuiz === new Date().toDateString()) {
        setIsFinished(true);
      }
    }
    // this action will be dispatched when user starts the quiz
    // redux saga takes updates the store
    dispatch(startLoadingAction());
  }, []);

  useEffect(() => {
    if (isFinished) {
      if (currentIndex > 0) {
        setInDataBase(answerRate, quizId);
      }
      History.push("/result");
    }
  }, [isFinished]);

  useEffect(() => {
    if (questions.length) {
      setQuestion(questions[currentIndex]);
    }
  }, [questions]);
  // fucntion we use to find out of the user's answer was true or not
  function handleAnswer(userAnsewer, userAnswerRate) {
    // checks if shown word has right spelling or not
    const trueAnswer = question.rightSpelling === randomWord;
    // userAnswer would be a boolean that represents the user's judgement about
    // seplling we show to user if we get if value of userAnswer and trueAnswer where the same
    // we set it give user 10 points otherwise we get 10 points from user
    // undefined is for when user dosen't answered the question
    if (userAnsewer !== undefined) {
      const data = standardDataCreator(randomWord, question, quizId);

      if (trueAnswer === userAnsewer) {
        dispatch(incraeseScoreAction());

        dispatch(addCorrectAnswer(data));
      } else {
        dispatch(decreaseScoreAction());

        dispatch(addWrongAnswer(data));
      }
    } else {
      const data = blankDataCreator(randomWord, question, quizId);
      //dispatch an actions that sets the strore's unanswereds
      dispatch(addUnasweredQuestion(data));
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
        // if user finished his quiz we set data to data base
        storeWrongAnswerData(wrongAnswers);
        storeRightAnswerData(rightAnswers);
        storeUnansweredData(unanswereds);
        dispatch(setFastestAnswerAction(answerRate));
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
          <QuestionMemo
            randomWord={randomWord}
            handler={handleAnswer}
            answerRate={answerRate}
            score={score}
          />
        </If>
      </If>
      <Else condition={!isLoading}>
        <LoadingSpinner />
      </Else>
    </>
  );
}
