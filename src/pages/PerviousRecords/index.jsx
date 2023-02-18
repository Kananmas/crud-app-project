// global components

import { IonButton, IonContent, IonInfiniteScroll } from "@ionic/react";

// hooks

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// action

import { startLoadingRecordsAction } from "../../store/records/records.actions";

// utilis

import { randomString } from "../../utils/random-string.util";
import { RecordSelector } from "./components/RecordSelector";

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
    <IonContent>
      <div style={{ color: "white" }}>
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
          <div>
            <IonButton onClick={HandleOnClickBack}>Back</IonButton>
            <IonButton onClick={HandleOnClickHome}>Home</IonButton>
          </div>
        </IonInfiniteScroll>
      </div>
    </IonContent>
  );
}
