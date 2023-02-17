import { call, put } from "redux-saga/effects"
import { fetchWords } from "../../utils/fetch-words.util";
import { setQuestions, finishLoadingAction, genereateQuizIdAction } from "./quiz.actions"

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