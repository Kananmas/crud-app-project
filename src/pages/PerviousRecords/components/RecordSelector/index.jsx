import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "../../../../components/Button";
import { setChosenRecordAction } from "../../../../store/records/records.actions";

export function RecordSelector({ id, date }) {
  const dispatch = useDispatch();
  const History = useHistory();

  function HandleOnClick() {
    console.log(setChosenRecordAction(id));
    dispatch(setChosenRecordAction(id));
    History.push("/pastresult");
  }

  return (
    <>
      <Button onClick={HandleOnClick}>{date.slice(0, 10)}</Button>
    </>
  );
}
