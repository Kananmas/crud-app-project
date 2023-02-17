import { call, put } from "redux-saga/effects";
import { getRecords } from "../../utils/get-records.util";
import { finishLoadingRecordsAction, setRecordsAction } from "./records.actions";

export function* recordsSaga() {
    try {
        const data = yield call(getRecords);
        yield put(setRecordsAction(data));
        yield put(finishLoadingRecordsAction());
    } catch (error) {
        console.log(error);
    }
}