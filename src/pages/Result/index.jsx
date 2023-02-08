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
} from "@ionic/react";

// hooks
import { useEffect, useState } from "react";
import { useIonAlert } from "@ionic/react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
// utils
import { getResultFromDatabase } from "./utils/get-result-from-database.util";
import { updateResultInDatebase } from "./utils/update-result-in-database.util";

export function Result() {
  const quiz = useSelector((store) => store.quiz);

  const { questions, rightAnswers, wrongAnswers, unanswereds } = quiz;

  // gets the latest score of user  from database and show it
  let [rightAnswersCount, setRightAnswersCount] = useState(0);
  let [wrongAnswersCount, setWrongAnswersCount] = useState(0);
  let [unansweredsCount, setUnansweredsCount] = useState(0);
  let [quizId, setQuizId] = useState("");
  let [score, setScore] = useState(0);
  const [presentAlert] = useIonAlert();
  const History = useHistory();

  useEffect(() => {
    localStorage.setItem("lastQuizDate", new Date().toDateString());
    if (!questions.length) {
      getResultFromDatabase({
        setRightAnswersCount,
        setWrongAnswersCount,
        setUnansweredsCount,
        setScore,
        setQuizId,
      });
    } else {
      setRightAnswersCount(rightAnswers.length);
      setWrongAnswersCount(wrongAnswers.length);
      setUnansweredsCount(unanswereds.length);
      setScore(rightAnswers.length * 10 - wrongAnswers.length * 5);
    }
  }, []);

  const TakeAnotherQuiz = () => {
    if (score >= 100) {
      updateResultInDatebase(quizId, score - 100).then(() => {
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

  return (
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
            <IonBadge color="success">{rightAnswersCount}</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Wrong Answers</IonLabel>
            <IonBadge color="danger">{wrongAnswersCount}</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Blank</IonLabel>
            <IonBadge color="light">{unansweredsCount}</IonBadge>
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
      </IonCard>
    </div>
  );
}
