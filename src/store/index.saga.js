import { all, takeEvery, takeLeading } from "redux-saga/effects"
import { START_LOADING_QUESTIONS } from "./quiz/quiz.constants";

import { quizSaga } from "./quiz/quiz.sagas";
import { START_LOADING_RECORDS } from "./records/records.constants";
import { recordsSaga } from "./records/records.sagas";



export function* allSagasWatcher() {
    yield all([takeLeading(START_LOADING_QUESTIONS, quizSaga), takeEvery(START_LOADING_RECORDS, recordsSaga)])
}