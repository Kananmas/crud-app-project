import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { IonButton } from "@ionic/react";
import { setChosenRecordAction } from "../../../../store/records/records.actions";

export function RecordSelector({ id, date }) {
  const dispatch = useDispatch();
  const History = useHistory();

  function HandleOnClick() {
    dispatch(setChosenRecordAction(id));
    History.push("/pastresult");
  }

  return (
    <IonButton
      size="default"
      expand="block"
      color="orange"
      onClick={HandleOnClick}
    >
      {date.slice(0, 10)}
    </IonButton>
  );
}
