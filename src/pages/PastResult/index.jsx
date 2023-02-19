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
} from "@ionic/react";

// hooks

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// actions
import { startLoadingRecordsAction } from "../../store/records/records.actions";
// utilis
import { randomString } from "../../utils/random-string.util";

export function PastResult() {
  const records = useSelector((store) => store.records);
  const dispatch = useDispatch();
  const History = useHistory();

  let [selectedRecord, setSelectedRecord] = useState();

  useEffect(() => {
    dispatch(startLoadingRecordsAction());
  }, []);

  useEffect(() => {
    setSelectedRecord(records.records[records.chosenRecord]);
  }, [records.records]);

  const HandleOnClickBack = () => {
    History.go(-1);
  };

  const HandleOnClickHome = () => {
    History.push("/slider");
  };

  if (selectedRecord) {
    return (
      <IonContent>
        <IonInfiniteScroll>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                Result of {selectedRecord.date.slice(0, 10)}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel>Score</IonLabel>
                  <IonBadge>{selectedRecord.score}</IonBadge>
                </IonItem>
                <IonItem>
                  <IonLabel>Rights Count</IonLabel>
                  <IonBadge color="success">
                    {selectedRecord.rightsCount}
                  </IonBadge>
                </IonItem>
                <IonItem>
                  <IonLabel>Wrongs Count</IonLabel>
                  <IonBadge color="danger">
                    {selectedRecord.wrongsCount}
                  </IonBadge>
                </IonItem>
                <IonItem>
                  <IonLabel>Blanks Count</IonLabel>
                  <IonBadge color="warning">
                    {selectedRecord.blanksCount}
                  </IonBadge>
                </IonItem>
                <IonItem>
                  <IonLabel>Fastest Answer</IonLabel>
                  <IonBadge color="tertiary">
                    {selectedRecord.fastestAnswer}
                  </IonBadge>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>

          <IonAccordionGroup>
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                Correct Answers
              </IonItem>
              {selectedRecord.rights.map((element) => {
                return (
                  <div
                    className="ion-padding"
                    slot="content"
                    key={randomString()}
                  >
                    True answer was<IonBadge>{element.true_answer}</IonBadge>{" "}
                    your answer was{" "}
                    <IonBadge color="success">{element.user_answer}</IonBadge>
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
              {selectedRecord.wrongs.map((element) => {
                return (
                  <div
                    className="ion-padding"
                    slot="content"
                    key={randomString()}
                  >
                    True answer was <IonBadge>{element.true_answer}</IonBadge>{" "}
                    your answer was{" "}
                    <IonBadge color="danger">{element.user_answer}</IonBadge>
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
              {selectedRecord.blanks.map((element) => {
                return (
                  <div
                    className="ion-padding"
                    slot="content"
                    key={randomString()}
                  >
                    question was <IonBadge>{element.question}</IonBadge> true
                    answer was <IonBadge>{element.true_answer}</IonBadge>
                  </div>
                );
              })}
            </IonAccordion>
          </IonAccordionGroup>
          <div className="pageButtons">
            <IonButton
              color="danger"
              fill="outline"
              onClick={HandleOnClickBack}
            >
              Back
            </IonButton>
            <IonButton
              fill="outline"
              color="danger"
              onClick={HandleOnClickHome}
            >
              Home
            </IonButton>
          </div>
        </IonInfiniteScroll>
      </IonContent>
    );
  }
}
