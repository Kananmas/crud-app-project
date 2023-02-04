// hooks
import { useTimer } from "../../hooks/timer.hook";
import { useEffect } from "react";

// components
import { IonButton } from "@ionic/react";
import { If } from "../If";

export function Question(props) {
  const { length, currentIndex, answerRate, randomWord, score, handler } =
    props;

  let maxTime = 30;
  let { value, isDone, start, reset, stop } = useTimer(maxTime);
  let userAnswerRate = maxTime - value;

  // this will be called if the user click's on wrong IonButton
  function HandleOnClickRight() {
    handler(true, userAnswerRate);
    resetTimer();
  }

  // this will be called if user click's on wrong IonButton
  function HandleOnClickWrong() {
    handler(false, userAnswerRate);
    resetTimer();
  }

  // will be called if user run's out of the time
  function passFromQuestion() {
    handler(undefined, userAnswerRate);
    resetTimer();
  }
  // this function resets timer if question change
  function resetTimer() {
    stop();
    reset();
    start();
  }

  useEffect(() => {
    if (isDone) {
      passFromQuestion();
      resetTimer();
    }
  }, [isDone]);

  useEffect(() => {
    if (randomWord) {
      start();
    }
  }, [randomWord]);

  return (
    <>
      <If condition={currentIndex > 0}>
        <h4>Shortest Answer:{answerRate}s</h4>
      </If>

      <div>
        <h4>Shown word:</h4>
        {randomWord}
      </div>
      <h4>Score:{score}</h4>
      <h4>Timer:{value}</h4>
      <h4>Question Number:{currentIndex + 1}</h4>
      <If condition={length && value > 0}>
        <IonButton onClick={HandleOnClickRight}>Right</IonButton>
        <IonButton onClick={HandleOnClickWrong}>Wrong</IonButton>
      </If>
    </>
  );
}
