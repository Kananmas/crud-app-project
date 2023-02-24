// global components
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
} from "@ionic/react";
// components
import { If } from "../../components/If";
import { Else } from "../../components/Else";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { RecordSelector } from "./components/RecordSelector";
import { StyledBackIcon, StyledHomeIcon } from "../../App.styled";
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

export function PreviousRecords() {
  const records = useSelector((store) => store.records);
  const dispatch = useDispatch();
  const History = useHistory();

  useEffect(() => {
    if (!records.records.length) {
      dispatch(startLoadingRecordsAction());
    }
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
                  <IonGrid>
                    <IonCol>
                      <StyledBackIcon onClick={HandleOnClickBack} />
                    </IonCol>
                    <IonCol offset={8.5}>
                      <StyledHomeIcon onClick={HandleOnClickHome} />
                    </IonCol>
                  </IonGrid>
                  <IonTitle>History</IonTitle>
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
