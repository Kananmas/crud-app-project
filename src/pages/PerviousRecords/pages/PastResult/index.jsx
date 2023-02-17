import { useSelector } from "react-redux";
import { If } from "../../../../components/If";
import { randomString } from "../../../../utils/random-string.util";

export function PastResult() {
  const records = useSelector((store) => store.records);
  let selectedRecord = records.records[records.chosenRecord];

  return (
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
  );
}
