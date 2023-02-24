import { call, put } from "redux-saga/effects";
import { getRecords } from "../../utils/get-records.util";
import { finishLoadingRecordsAction, setRecordsAction } from "./records.actions";


// this saga loads up previous records of the user
export function* recordsSaga() {
    try {
        const data = yield call(getRecords);
        yield put(setRecordsAction(data));
        yield put(finishLoadingRecordsAction());
    } catch (error) {
        console.log(error);
    }
}