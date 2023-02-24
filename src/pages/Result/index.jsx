// global components
import {
  IonBadge,
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
  IonAccordionGroup,
  IonAccordion,
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
import { randomString } from "../../utils/random-string.util";
// actions
import {
  loadingPerviousResult,
  tradeScoreAction,
} from "../../store/quiz/quiz.actions";
// styles
import { StyledPageButtons } from "../../App.styled";
import { Button } from "../../components/Button";
import { StyledIonButton } from "../Slider/index.styled";

export function Result() {
  //redux
  const quiz = useSelector((store) => store.quiz);
  const dispatch = useDispatch();
  const {
    rightAnswers,
    wrongAnswers,
    unanswereds,
    score,
    fastestAnswer,
    loading,
  } = quiz;
  //other
  const [presentAlert] = useIonAlert();
  const History = useHistory();

  useEffect(() => {
    localStorage.setItem("lastQuizDate", new Date().toDateString());
    // if there was no questions set means that user reloaded the page therefor we take the result of the last quiz
    // form data base and set it inside our store show it to the user
    if (!quiz.questions.length) {
      dispatch(loadingPerviousResult());
    }
  }, []);

  // if user dosent have enough points to take another quiz
  // user will be faced with an alert
  // otherwise it update the result in data base and he will have another go
  const TakeAnotherQuiz = () => {
    if (score >= 100) {
      localStorage.removeItem("lastQuizDate");
      dispatch(tradeScoreAction());
      History.push("/quiz");
    } else {
      presentAlert({
        header: "Alert",
        message: "Sorry!! you don't have enough points",
        buttons: ["OK"],
      });
    }
  };

  // goes to home page
  const HandleClickHome = () => {
    History.push("/slider");
  };

  // goes to page of previous result
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
              <PieChart style={{ marginTop: "34px" }} width={393} height={150}>
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
              </IonCard>
              <StyledPageButtons>
                <StyledIonButton onClick={TakeAnotherQuiz}>
                  Play Again (costs 100 points)
                </StyledIonButton>
                <StyledIonButton onClick={HandleClickHome}>
                  Home
                </StyledIonButton>
                <StyledIonButton onClick={SeePreviousRecords}>
                  History
                </StyledIonButton>
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
