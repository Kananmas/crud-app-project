// global components

import { IonButton, IonContent, IonInfiniteScroll } from "@ionic/react";
import { If } from "../../components/If";

// hooks

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// action

import { startLoadingRecordsAction } from "../../store/records/records.actions";

// utilis

import { randomString } from "../../utils/random-string.util";
import { RecordSelector } from "./components/RecordSelector";
import { Else } from "../../components/Else";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { PageButtons, ResultContainer, StyledIonText } from "./index.style";

export function PreviousRecords() {
  const records = useSelector((store) => store.records);
  const dispatch = useDispatch();
  const History = useHistory();

  useEffect(() => {
    dispatch(startLoadingRecordsAction());
  }, []);

  const HandleOnClickBack = () => {
    History.go(-1);
  };

  const HandleOnClickHome = () => {
    History.push("/slider");
  };

  return (
    <>
      <If condition={!records.loading}>
        <IonContent>
          <ResultContainer>
            <StyledIonText>
              <h1>Previous Records</h1>
            </StyledIonText>
            <IonInfiniteScroll>
              {records.records.map((record, index) => {
                return (
                  <RecordSelector
                    key={randomString()}
                    id={index}
                    date={record.date}
                  />
                );
              })}
              <PageButtons>
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
              </PageButtons>
            </IonInfiniteScroll>
          </ResultContainer>
        </IonContent>
      </If>
      <Else condition={!records.loading}>
        <LoadingSpinner />
      </Else>
    </>
  );
}
