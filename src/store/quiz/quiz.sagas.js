import { call, put } from "redux-saga/effects";
import { getLastResult } from "../../utils/get-last-result.util";
import { fetchWords } from "../../utils/fetch-words.util";
import { storeAllDetails } from "../../utils/store-all-details.util";
import {
  setQuestions,
  finishLoadingAction,
  genereateQuizIdAction,
  setQuizToAction,
  resetAction,
} from "./quiz.actions";
import { updateResult } from "../../utils/update-result.util";
import { delay } from "redux-saga/effects";

export function* quizSaga() {
  try {
    const data = yield call(fetchWords);
    yield put(setQuestions(data));
    yield put(finishLoadingAction());
    yield put(genereateQuizIdAction());
  } catch (error) {
    console.log(error);
  }
}

export function* lastQuizSaga() {
  try {
    const data = yield call(getLastResult);
    yield put(setQuizToAction(data));
    yield put(finishLoadingAction());
  } catch (error) {
    console.log(error);
  }
}

export function* setAllDataSaga() {
  try {
    yield call(storeAllDetails);
  } catch (error) {
    console.log(error);
  }
}


export function* updateResultSaga() {
  try {
    yield call(updateResult);
  } catch (error) {
    console.log(error)
  } finally {
    yield delay(1000);
    yield put(resetAction());
  }
}