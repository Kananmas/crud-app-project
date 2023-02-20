import { all, takeEvery, takeLatest, takeLeading } from "redux-saga/effects"
import { LOADING_PERVIOUS_RESULT, START_LOADING_QUESTIONS } from "./quiz/quiz.constants";

import { quizSaga } from "./quiz/quiz.sagas";
import { lastQuizSaga } from "./quiz/quiz.sagas";
import { START_LOADING_RECORDS } from "./records/records.constants";
import { recordsSaga } from "./records/records.sagas";



export function* allSagasWatcher() {
    yield all([takeLeading(START_LOADING_QUESTIONS, quizSaga), takeEvery(START_LOADING_RECORDS, recordsSaga), takeLatest(LOADING_PERVIOUS_RESULT, lastQuizSaga)])
}