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

  const handleAnswer = (userAnsewer) => {
    stop();
    const validity = question.rightSpelling === randomWord;
    if (userAnsewer !== undefined) {
      if (validity === userAnsewer) {
        setScore((score) => score + 10);
      } else {
        setScore((score) => score - 5);
      }
    }

    if (currentIndex < 29) {
      if (maxTime - value < answerRate) {
        setAnswerRate(maxTime - value);
        console.log(maxTime - value);
      }
      setCurrentIndex((index) => index + 1);
      setQuestion(list[currentIndex + 1]);
    }

    reset();
    start();
  };

  return (
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
      {list.length && currentIndex !== list.length - 1 && value > 0 ? (
        <>
          <button onClick={() => handleAnswer(true)}>Right</button>
          <button onClick={() => handleAnswer(false)}>Wrong</button>
        </>
      ) : null}
      {value === 0 ? (
        <button onClick={() => handleAnswer(undefined)}>Next</button>
      ) : null}
    </>
  );
}
