import { takeLeading } from "redux-saga/effects"
import { START_LOADING } from "./quiz/quiz.constants";
import { quizSaga } from "./quiz/quiz.sagas";



export function* QuizSagas() {
    yield takeLeading(START_LOADING, quizSaga)
}