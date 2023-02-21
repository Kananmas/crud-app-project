// global components
import {
  IonAccordion,
  IonAccordionGroup,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInfiniteScroll,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import { PieChart, Pie, Cell } from "recharts";
// components
import { If } from "../../components/If";
import { Else } from "../../components/Else";
import { LoadingSpinner } from "../../components/LoadingSpinner";
// hooks
import { useEffect } from "react";
import { useIonAlert } from "@ionic/react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// utils
import { replaceResult } from "./utils/replace-result.util";
import { randomString } from "../../utils/random-string.util";
// actions
import {
  loadingPerviousResult,
  resetAction,
} from "../../store/quiz/quiz.actions";
// styles
import { StyledPageButtons } from "../../App.styled";

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
    if (!quiz.questions.length) {
      dispatch(loadingPerviousResult());
    }
  }, []);

  console.log(quiz);

  const TakeAnotherQuiz = () => {
    if (score >= 100) {
      dispatch(resetAction());
      replaceResult(quizId, score - 100).then(() => {
        localStorage.removeItem("lastQuizDate");
        History.push("/quiz");
      });
    } else {
      presentAlert({
        header: "Alert",
        message: "Sorry!! you don't have enough points",
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

  const colors = ["red", "yellow", "green"];

  const data = [
    { name: "wrongs", count: wrongAnswers.length },
    { name: "unanswered", count: unanswereds.length },
    { name: "rights", count: rightAnswers.length },
  ];

  return (
    <>
      <If condition={!loading}>
        <IonPage>
          <IonContent>
            <IonInfiniteScroll>
              <PieChart width={393} height={190}>
                <Pie
                  data={data}
                  dataKey="count"
                  outerRadius={70}
                  innerRadius={50}
                >
                  {data.map((entry, index) => {
                    return (
                      <Cell
                        key={randomString()}
                        fill={colors[index % colors.length]}
                      />
                    );
                  })}
                </Pie>
              </PieChart>
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
                    <IonBadge color="warning">{unanswereds.length}</IonBadge>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Fanstest Answer</IonLabel>
                    <IonBadge color="tertiary">{fastestAnswer}.s</IonBadge>
                  </IonItem>
                </IonList>

                <IonCardContent>
                  press Try again to trade point and have another go
                </IonCardContent>
              </IonCard>

              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header" color="light">
                    Correct Answers
                  </IonItem>
                  {rightAnswers.map((element) => {
                    return (
                      <div
                        className="ion-padding"
                        slot="content"
                        key={randomString()}
                      >
                        True answer was
                        <IonBadge>{element.true_answer}</IonBadge> your answer
                        was{" "}
                        <IonBadge color="success">
                          {element.user_answer}
                        </IonBadge>
                      </div>
                    );
                  })}
                </IonAccordion>
              </IonAccordionGroup>
              <IonAccordionGroup>
                <IonAccordion value="second">
                  <IonItem slot="header" color="light">
                    Wrong Answers
                  </IonItem>
                  {wrongAnswers.map((element) => {
                    return (
                      <div
                        className="ion-padding"
                        slot="content"
                        key={randomString()}
                      >
                        True answer was{" "}
                        <IonBadge>{element.true_answer}</IonBadge> your answer
                        was{" "}
                        <IonBadge color="danger">
                          {element.user_answer}
                        </IonBadge>
                      </div>
                    );
                  })}
                </IonAccordion>
              </IonAccordionGroup>
              <IonAccordionGroup>
                <IonAccordion value="third">
                  <IonItem slot="header" color="light">
                    Blank Answers
                  </IonItem>
                  {unanswereds.map((element) => {
                    return (
                      <div
                        className="ion-padding"
                        slot="content"
                        key={randomString()}
                      >
                        question was <IonBadge>{element.question}</IonBadge>{" "}
                        true answer was{" "}
                        <IonBadge>{element.true_answer}</IonBadge>
                      </div>
                    );
                  })}
                </IonAccordion>
              </IonAccordionGroup>
              <StyledPageButtons>
                <IonButton
                  expand="block"
                  fill="outline"
                  color="danger"
                  onClick={TakeAnotherQuiz}
                >
                  Play Again (costs 100 points)
                </IonButton>
                <IonButton
                  expand="block"
                  fill="outline"
                  color="danger"
                  onClick={HandleClickHome}
                >
                  Back
                </IonButton>
                <IonButton
                  expand="block"
                  fill="outline"
                  color="danger"
                  onClick={SeePreviousRecords}
                >
                  Previous Records
                </IonButton>
              </StyledPageButtons>
            </IonInfiniteScroll>
          </IonContent>
        </IonPage>
      </If>
      <Else condition={!loading}>
        <LoadingSpinner />
      </Else>
    </>
  );
}
