import { IonButton } from "@ionic/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function Result({ score, trade }) {
  const quiz = useSelector((store) => store.quiz);
  const { wrongAnswers, rightAnswers, unanswereds } = quiz;

  useEffect(() => {
    localStorage.setItem("lastQuizDate", new Date().toDateString());
  }, []);

  const TakeAnotherQuiz = () => {
    if (score >= 100) {
      trade();
    } else {
      alert("you don't have enough score");
    }
  };

  return (
    <>
      <h1>Done!</h1>

      <h6>score:{score}</h6>
      <h6>wrong answers:{wrongAnswers.length}</h6>
      <h6>true answers:{rightAnswers.length}</h6>
      <h6>unanswereds:{unanswereds.length}</h6>
      <IonButton onClick={TakeAnotherQuiz}>Take Another Quiz</IonButton>
    </>
  );
}
