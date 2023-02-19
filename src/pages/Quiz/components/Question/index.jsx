// hooks
import { useTimer } from "../../../../hooks/timer.hook";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

// global components
import {
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";
import { AiOutlineLeft } from "react-icons/ai";
import { resetAction } from "../../../../store/quiz/quiz.actions";
import { startLoadingAction } from "../../../../store/quiz/quiz.actions";

export function Question(props) {
  const { score, randomWord, handler } = props;
  let maxTime = 30;
  let { value, isDone, start, reset, stop } = useTimer(maxTime);
  let userAnswerRate = maxTime - value;
  const History = useHistory();
  const dispatch = useDispatch();

  // this will be called if the user click's on wrong IonButton
  function HandleOnClickRight() {
    handler(true, userAnswerRate);
    resetTimer();
  }

  function Restart() {
    dispatch(startLoadingAction());
  }

  function Back() {
    dispatch(resetAction());

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
  }, [randomWord]);

  return (
    <div className="question">
      <IonGrid>
        <IonRow>
          <IonCol size="2">
            <div className="col-element" onClick={Back}>
              <AiOutlineLeft />
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
