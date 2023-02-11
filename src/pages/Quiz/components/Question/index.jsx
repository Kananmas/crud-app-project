// hooks
import { useTimer } from "../../../../hooks/timer.hook";
import { useEffect } from "react";
import { useHistory } from "react-router";

// global components
import { IonButton, IonText, IonGrid, IonRow, IonCol } from "@ionic/react";

export function Question(props) {
  const { score, randomWord, handler } = props;
  let maxTime = 30;
  let { value, isDone, start, reset, stop } = useTimer(maxTime);
  let userAnswerRate = maxTime - value;
  const History = useHistory();

  // this will be called if the user click's on wrong IonButton
  function HandleOnClickRight() {
    handler(true, userAnswerRate);
    resetTimer();
  }

  function Restart() {
    History.go(0);
  }

  function Back() {
    History.push("/slider");
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

    if (localStorage.getItem("initialized")) {
      if (!localStorage.getItem("username")) {
        localStorage.clear();
        History.push("/signup");
      }
    }

    if (!localStorage.getItem("username")) {
      localStorage.clear();
      History.push("/signup");
    }
  }, [randomWord]);

  return (
    <div className="question">
      <IonGrid>
        <IonRow>
          <IonCol size="2">
            <div className="col-element" onClick={Back}>
              {"<"}
            </div>
          </IonCol>
          <IonCol size="2" offset="3">
            <div className="timer">0:{value}</div>
          </IonCol>
          <IonCol offset="2">
            <div className="col-element" onClick={Restart}>
              Restart
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>

      <div className="part ">
        <div className="org-backlight">
          <IonText color="orange">
            <h1>{randomWord}</h1>
          </IonText>
        </div>
      </div>

      <div className="part">
        <div className="score-meter">
          <h1>{score}</h1>
          <p>SCORE</p>
        </div>

        <IonButton
          className="start"
          expand="block"
          fill="outline"
          color="orange"
          size="default"
          onClick={HandleOnClickRight}
        >
          CORRECT
        </IonButton>
        <IonButton
          className="start"
          expand="block"
          onClick={HandleOnClickWrong}
        >
          WRONG
        </IonButton>
      </div>
    </div>
  );
}
