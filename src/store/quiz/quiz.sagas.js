import { call, put } from "redux-saga/effects"
import { getLastResult } from "../../utils/get-last-result";
import { fetchWords } from "../../utils/fetch-words.util";
import { storeAllDetails } from "../../utils/store-extradata.util";
import { setQuestions, finishLoadingAction, genereateQuizIdAction, setQuizToAction } from "./quiz.actions"

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