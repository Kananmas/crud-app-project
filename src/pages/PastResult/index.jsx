import { IonButton, IonContent, IonInfiniteScroll } from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { startLoadingRecordsAction } from "../../store/records/records.actions";
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
          <div style={{ color: "white", textAlign: "center" }}>
            <h2>score:{selectedRecord.score}</h2>
            <h2>Rights Count:{selectedRecord.rightsCount}</h2>
            <h2>Wrongs Count:{selectedRecord.wrongsCount}</h2>
            <h2>Blanks Count:{selectedRecord.blanksCount}</h2>
            <h2>fastestAnswer:{selectedRecord.fastestAnswer}</h2>
            <h1>Corrects</h1>
            {selectedRecord.rights.map((element) => {
              return (
                <div key={randomString()}>
                  {element.true_answer} : {element.user_answer}
                </div>
              );
            })}
            <h1>Wrongs</h1>
            {selectedRecord.wrongs.map((element) => {
              return (
                <div key={randomString()}>
                  {element.true_answer} : {element.user_answer}
                </div>
              );
            })}
            <h1>Unanswereds</h1>
            {selectedRecord.blanks.map((element) => {
              return (
                <div key={randomString()}>
                  {element.question} : {element.true_answer}
                </div>
              );
            })}
          </div>
          <IonButton onClick={HandleOnClickBack}>Back</IonButton>
          <IonButton onClick={HandleOnClickHome}>Home</IonButton>
        </IonInfiniteScroll>
      </IonContent>
    );
  }
}
