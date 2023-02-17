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
import { getLastResult } from "./utils/get-last-result";
import { replaceResult } from "./utils/replace-result";

export function Result() {
  const quiz = useSelector((store) => store.quiz);

  const {
    questions,
    rightAnswers,
    wrongAnswers,
    unanswereds,
    score: $score,
  } = quiz;

  let [rightAnswersCount, setRightAnswersCount] = useState(0);
  let [wrongAnswersCount, setWrongAnswersCount] = useState(0);
  let [unansweredsCount, setUnansweredsCount] = useState(0);
  let [fasterstAnswer, setFastestAnswer] = useState(0);
  let [quizId, setQuizId] = useState("");
  let [score, setScore] = useState(0);
  const [presentAlert] = useIonAlert();
  const History = useHistory();

  useEffect(() => {
    localStorage.setItem("lastQuizDate", new Date().toDateString());
    if (!questions.length) {
      getLastResult({
        setRightAnswersCount,
        setWrongAnswersCount,
        setUnansweredsCount,
        setScore,
        setQuizId,
        setFastestAnswer,
      });
    } else {
      setRightAnswersCount(rightAnswers.length);
      setWrongAnswersCount(wrongAnswers.length);
      setUnansweredsCount(unanswereds.length);
      setScore($score);
      setQuizId(quiz.quizId);
      setFastestAnswer(quiz.fasterstAnswer);
    }
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
          <IonItem>
            <IonLabel>Fanstest Answer</IonLabel>
            <IonBadge color="light">{fasterstAnswer}</IonBadge>
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
        <IonButton fill="outline" color="danger" onClick={SeePreviousRecords}>
          Previous Records
        </IonButton>
      </IonCard>
    </div>
  );
}
