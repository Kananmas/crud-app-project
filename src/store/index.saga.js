import { all, takeEvery, takeLatest, takeLeading } from "redux-saga/effects"
import { LOADING_PERVIOUS_RESULT, SET_ALL_DATA, START_LOADING_QUESTIONS } from "./quiz/quiz.constants";
import { START_LOADING_RECORDS } from "./records/records.constants";

import { quizSaga } from "./quiz/quiz.sagas";
import { lastQuizSaga } from "./quiz/quiz.sagas";
import { recordsSaga } from "./records/records.sagas";
import { setAllDataSaga } from "./quiz/quiz.sagas";



export function* allSagasWatcher() {
    yield all([takeLeading(START_LOADING_QUESTIONS, quizSaga), takeEvery(START_LOADING_RECORDS, recordsSaga), takeLatest(LOADING_PERVIOUS_RESULT, lastQuizSaga), takeLatest(SET_ALL_DATA, setAllDataSaga)])
}