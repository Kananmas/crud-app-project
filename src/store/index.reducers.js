import { combineReducers } from "redux"
import { quizReducer } from "./quiz/quiz.reducer"

export const reducers = combineReducers({
    quiz: quizReducer,
})