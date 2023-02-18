// global components
import {
  IonBadge,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSpinner,
} from "@ionic/react";

// hooks
import { useEffect } from "react";
import { useIonAlert } from "@ionic/react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// utils
import { replaceResult } from "./utils/replace-result";
import { loadingPerviousResult } from "../../store/quiz/quiz.actions";
import { If } from "../../components/If";
import { Else } from "../../components/Else";

export function Result() {
  const quiz = useSelector((store) => store.quiz);
  const dispatch = useDispatch();
  const {
    rightAnswers,
    wrongAnswers,
    unanswereds,
    score,
    quizId,
    fastestAnswer,
    loading,
  } = quiz;

  const [presentAlert] = useIonAlert();
  const History = useHistory();

  useEffect(() => {
    localStorage.setItem("lastQuizDate", new Date().toDateString());
    dispatch(loadingPerviousResult());
  }, []);

  const TakeAnotherQuiz = () => {
    if (score >= 100) {
      replaceResult(quizId, score - 100).then(() => {
        localStorage.removeItem("lastQuizDate");
        History.push("/quiz");
      });
    } else {
      presentAlert({
        header: "Alert",
        message: "Sorry!! you don't have enough score",
        buttons: ["OK"],
      });
    }
  };

  const HandleClickHome = () => {
    History.push("/slider");
  };

  const SeePreviousRecords = () => {
    History.push("/previousrecords");
  };

  return (
    <>
      <If condition={!loading}>
        <div style={{ textAlign: "center" }}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Result</IonCardTitle>
            </IonCardHeader>

            <IonList>
              <IonItem>
                <IonLabel>Score</IonLabel>
                <IonBadge color="primary">{score}</IonBadge>
              </IonItem>
              <IonItem>
                <IonLabel>Correct Answers</IonLabel>
                <IonBadge color="success">{rightAnswers.length}</IonBadge>
              </IonItem>
              <IonItem>
                <IonLabel>Wrong Answers</IonLabel>
                <IonBadge color="danger">{wrongAnswers.length}</IonBadge>
              </IonItem>
              <IonItem>
                <IonLabel>Blank</IonLabel>
                <IonBadge color="light">{unanswereds.length}</IonBadge>
              </IonItem>
              <IonItem>
                <IonLabel>Fanstest Answer</IonLabel>
                <IonBadge color="light">{fastestAnswer}</IonBadge>
              </IonItem>
            </IonList>

            <IonCardContent>
              press button to trade point and try again
            </IonCardContent>

            <IonButton fill="outline" color="danger" onClick={TakeAnotherQuiz}>
              Try Again
            </IonButton>
            <IonButton fill="outline" color="danger" onClick={HandleClickHome}>
              Back
            </IonButton>
            <IonButton
              fill="outline"
              color="danger"
              onClick={SeePreviousRecords}
            >
              Previous Records
            </IonButton>
          </IonCard>
        </div>
      </If>
      <Else condition={!loading}>
        <div className="spinner">
          <IonSpinner name="circular" color="orange"></IonSpinner>
        </div>
      </Else>
    </>
  );
}
