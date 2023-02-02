import supabase from "../services/supabaseClient";
import { useEffect, useState } from "react";
import { createQuiz } from "../utilis/create-quiz.utilis";
import { useTimer } from "../hooks/timer.hook";
import { useRandom } from "../hooks/random.hook";

export default function Home() {
  let [list, setList] = useState([]);
  let [question, setQuestion] = useState({});
  let [currentIndex, setCurrentIndex] = useState(0);
  let [score, setScore] = useState(0);

  let [correctAnswers, setCorrectAnswers] = useState([]);
  let [mistakes, setMistakes] = useState([]);
  let [unansweredList, setUnansweredList] = useState([]);

  let randomWord = useRandom(question, [list, currentIndex]);

  let maxTime = 30;
  let { value, start, stop, reset } = useTimer(maxTime);
  let [answerRate, setAnswerRate] = useState(maxTime);

  useEffect(() => {
    const fetchWords = async () => {
      const { data, error } = await supabase.from("questionlist").select();
      if (error) {
        throw new Error(error.message);
      }
      if (data) {
        const list = createQuiz(data);
        setList(list);
        setQuestion(list[currentIndex]);
      }
    };
    fetchWords();
    start();
  }, []);

  useEffect(() => {
    if (currentIndex === 29) {
      async function setInDataBase() {
        const opreation = await supabase.from("results").select();
        const { data } = opreation;
        let length = data.length;
        console.log(length);
        try {
          let data = {
            id: length + 1,
            quiz_date: new Date(),
            rights: correctAnswers,
            wrongs: mistakes,
            unanswered: unansweredList,
          };
          await supabase.from("results").insert(data);
        } catch (error) {
          console.warn(error.message);
        }
      }

      setInDataBase();
    }
  }, [currentIndex]);

  const handleAnswer = (userAnsewer) => {
    stop();
    const validity = question.rightSpelling === randomWord;
    if (userAnsewer !== undefined) {
      if (validity === userAnsewer) {
        setScore((score) => score + 10);

        let newCorrentAnswers = [...correctAnswers];
        newCorrentAnswers.push(question.rightSpelling);
        setCorrectAnswers(newCorrentAnswers);
      } else {
        setScore((score) => score - 5);

        let newMistakes = [...mistakes];
        newMistakes.push(randomWord);
        setMistakes(newMistakes);
      }
    } else {
      let NewUnansweredList = [...unansweredList];
      NewUnansweredList.push(randomWord);
      setUnansweredList(NewUnansweredList);
    }

    if (currentIndex <= 29) {
      if (maxTime - value < answerRate) {
        setAnswerRate(maxTime - value);
      }
      setCurrentIndex((index) => index + 1);
      setQuestion(list[currentIndex + 1]);
    }
    reset();
    start();
  };

  return (
    <>
      {currentIndex < list.length - 1 ? (
        <>
          <h4>
            Shortest Answer:{currentIndex > 0 ? answerRate + " seconds" : null}
          </h4>
          <div>
            <h4>Shown word:</h4>
            {randomWord}
          </div>
          <h4>Score:{score}</h4>
          <h4>Timer:{value}</h4>
          <h4>Question Number:{currentIndex + 1}</h4>
          {list.length && value > 0 ? (
            <>
              <button onClick={() => handleAnswer(true)}>Right</button>
              <button onClick={() => handleAnswer(false)}>Wrong</button>
            </>
          ) : null}
          {value === 0 ? (
            <button onClick={() => handleAnswer(undefined)}>Next</button>
          ) : null}
        </>
      ) : (
        <>
          <h1>Done</h1>
        </>
      )}
    </>
  );
}

function Results() {}
