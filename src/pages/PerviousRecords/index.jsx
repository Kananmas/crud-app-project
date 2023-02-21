// global components
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// components
import { If } from "../../components/If";
import { Else } from "../../components/Else";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { RecordSelector } from "./components/RecordSelector";
// hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// action
import { startLoadingRecordsAction } from "../../store/records/records.actions";
// utilis
import { randomString } from "../../utils/random-string.util";
// styles
import { ResultContainer, StyledIonText } from "./index.styled";
import { StyledPageButtons } from "../../App.styled";

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
              <IonHeader>
                <IonToolbar>
                  <IonTitle>
                    <h1>Previous Records</h1>
                  </IonTitle>
                </IonToolbar>
              </IonHeader>
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
              <StyledPageButtons>
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
              </StyledPageButtons>
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
