// effects
import { all, takeEvery, takeLatest, takeLeading } from "redux-saga/effects"

// action types
import { LOADING_PERVIOUS_RESULT, SET_ALL_DATA, START_LOADING_QUESTIONS, TRADE_SCORE } from "./quiz/quiz.constants";
import { START_LOADING_RECORDS } from "./records/records.constants";
import { SIGN_IN_USER, SIGN_UP_USER } from "./user/user.constants";

// sagas
import { quizSaga, updateResultSaga } from "./quiz/quiz.sagas";
import { lastQuizSaga } from "./quiz/quiz.sagas";
import { recordsSaga } from "./records/records.sagas";
import { setAllDataSaga } from "./quiz/quiz.sagas";
import { signinSaga, signupSaga } from "./user/user.sagas";



export function* allSagasWatcher() {
    yield all([takeLeading(START_LOADING_QUESTIONS, quizSaga),
    takeEvery(START_LOADING_RECORDS, recordsSaga),
    takeLatest(LOADING_PERVIOUS_RESULT, lastQuizSaga),
    takeLatest(SET_ALL_DATA, setAllDataSaga),
    takeLatest(SIGN_IN_USER, signinSaga),
    takeLatest(SIGN_UP_USER, signupSaga),
    takeLatest(TRADE_SCORE, updateResultSaga)
    ])
}