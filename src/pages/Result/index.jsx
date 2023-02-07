// components
import { IonButton } from "@ionic/react";

// hooks
import { useEffect, useState } from "react";
import { useIonAlert } from "@ionic/react";
import { getResultFromDatabase } from "./utils/get-result-from-database.util";
import { updateResultInDatebase } from "./utils/update-result-in-database.util";
import { useHistory } from "react-router";

export function Result({ trade }) {
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
    getResultFromDatabase({
      setRightAnswersCount,
      setWrongAnswersCount,
      setUnansweredsCount,
      setScore,
      setQuizId,
    });
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

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h1>Done!</h1>

      <h6>
        score:{!score ? rightAnswersCount * 10 - wrongAnswersCount * 5 : score}
      </h6>
      <h6>wrong answers:{rightAnswersCount}</h6>
      <h6>true answers:{wrongAnswersCount}</h6>
      <h6>unanswereds:{unansweredsCount}</h6>
      <IonButton onClick={TakeAnotherQuiz}>Try again</IonButton>
    </div>
  );
}
