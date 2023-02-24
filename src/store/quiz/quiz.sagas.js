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
  startLoadingAction,
} from "./quiz.actions";
import { updateResult } from "../../utils/update-result.util";

// this saga will get the questions from data base the 
// puts it inside of our store
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


// this saga is called to get the last result of the player
// and show it to him in case it store is reseted upon reloading or something 
export function* lastQuizSaga() {
  try {
    const data = yield call(getLastResult);
    yield put(setQuizToAction(data));
    yield put(finishLoadingAction());
  } catch (error) {
    console.log(error);
  }
}

// this saga is used after the end of the quiz
// it will set the data of the user wrong answers,right answrs etc...
export function* setAllDataSaga() {
  try {
    yield call(storeAllDetails);
  } catch (error) {
    console.log(error);
  }
}

// this saga updates result when user wants to trade 100 points to take another quiz
export function* updateResultSaga() {
  try {
    yield call(updateResult);
    yield put(resetAction());
  } catch (error) {
    console.log(error)
  } finally {
    yield put(startLoadingAction())
  }
}