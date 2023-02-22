// hooks
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useTimer } from "../../../../hooks/timer.hook";
// global components
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { AiOutlineLeft } from "react-icons/ai";
// actions
import { resetAction } from "../../../../store/quiz/quiz.actions";
import { startLoadingAction } from "../../../../store/quiz/quiz.actions";
// styles
import { StyledIonContent, StyledIonPage } from "../../../../App.styled";
import {
  StyledElements,
  StyledIonButton,
  StyledQuestionWrapper,
  StyledScore,
  StyledScoreWrapper,
  StyledTimer,
  StyledWord,
  StyledWordWrapper,
} from "./index.styled";

export function Question(props) {
  const MAX_TIME = 30;
  const { score, randomWord, handler } = props;
  let { value, isDone, start, reset, stop } = useTimer(MAX_TIME);
  let userAnswerRate = MAX_TIME - value;
  const History = useHistory();
  const dispatch = useDispatch();

  // this will be called if the user click's on wrong IonButton
  function HandleOnClickRight() {
    handler(true, userAnswerRate);
    resetTimer();
  }

  function Restart() {
    dispatch(resetAction());
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
    <StyledIonPage>
      <StyledIonContent>
        <StyledQuestionWrapper>
          <IonGrid>
            <IonRow>
              <IonCol size="2">
                <StyledElements onClick={Back}>
                  <AiOutlineLeft />
                </StyledElements>
              </IonCol>
              <IonCol size="2" offset="3">
                <StyledTimer className="timer">0:{value}</StyledTimer>
              </IonCol>
              <IonCol offset="2">
                <StyledElements onClick={Restart}>Restart</StyledElements>
              </IonCol>
            </IonRow>
          </IonGrid>
          <StyledWordWrapper>
            <StyledWord data-testId={'styledWord'}>{randomWord}</StyledWord>
          </StyledWordWrapper>

          <StyledScoreWrapper className="score-meter">
            <StyledScore>{score}</StyledScore>
            <p>SCORE</p>
          </StyledScoreWrapper>
          <StyledIonButton
            expand="block"
            fill="outline"
            color="orange"
            onClick={HandleOnClickRight}
          >
            CORRECT
          </StyledIonButton>
          <StyledIonButton expand="block" onClick={HandleOnClickWrong}>
            WRONG
          </StyledIonButton>
        </StyledQuestionWrapper>
      </StyledIonContent>
    </StyledIonPage>
  );
}
