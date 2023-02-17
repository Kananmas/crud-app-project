import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingRecordsAction } from "../../store/records/records.actions";
import { randomString } from "../../utils/random-string.util";
import { RecordSelector } from "./components/RecordSelector";

export function PreviousRecords() {
  const records = useSelector((store) => store.records);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingRecordsAction());
  }, []);

  console.log(records);

  return (
    <div style={{ color: "white" }}>
      {records.records.map((record, index) => {
        return (
          <RecordSelector key={randomString()} id={index} date={record.date} />
        );
      })}
    </div>
  );
}
