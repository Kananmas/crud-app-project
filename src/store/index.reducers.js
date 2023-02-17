import { combineReducers } from "redux"
import { quizReducer } from "./quiz/quiz.reducer"
import { recordsReducer } from "./records/records.reducer"


export const reducers = combineReducers({
    quiz: quizReducer,
    records: recordsReducer,
})

