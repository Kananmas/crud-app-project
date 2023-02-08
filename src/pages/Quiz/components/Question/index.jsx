// hooks
import { useTimer } from "../../../../hooks/timer.hook";
import { useEffect } from "react";
import { IonButton, IonText, IonLabel, IonGrid, IonRow, IonCol, IonTitle } from "@ionic/react";

import "./index.style.css"

export function Question(props) {
  const { score, randomWord, handler } = props;

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
    <div className="question">
      <IonGrid>
        <IonRow>
          <IonCol size="2">
            <div className="col-element">{"<"}</div>
          </IonCol>
          <IonCol size="2" offset="3">
            <div className="timer" >0:32</div>
          </IonCol>
          <IonCol offset="2">
            <div className="col-element">Restart</div>
          </IonCol>
        </IonRow>
      </IonGrid>

      <div className="part ">
        <div className="org-backlight">
          <IonText color="orange">
            <h1>apple</h1>
          </IonText>
        </div>
      </div>

      <div className="part">
        <div className="score-meter">
          <h1>6</h1>
          <p>SCORE</p>
        </div>

          <IonButton className="start" expand="block" fill="outline" color="orange" size="default">CORRECT</IonButton>
          <IonButton className="start" expand="block"  >WRONG</IonButton></div>
      
    </div>
  );
}
