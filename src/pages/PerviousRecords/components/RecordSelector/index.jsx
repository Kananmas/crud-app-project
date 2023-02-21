// hooks
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// actions
import { setChosenRecordAction } from "../../../../store/records/records.actions";
// styles
import { StyledIonButton } from "./index.styled";


export function RecordSelector({ id, date }) {
  const dispatch = useDispatch();
  const History = useHistory();

  function HandleOnClick() {
    dispatch(setChosenRecordAction(id));
    History.push("/pastresult");
  }

  return (
    <StyledIonButton
      size="default"
      expand="block"
      color="orange"
      onClick={HandleOnClick}
    >
      {date.slice(0, 10)}
    </StyledIonButton>
  );
}
