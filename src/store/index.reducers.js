import { combineReducers } from "redux"
import { quizReducer } from "./quiz/quiz.reducer"
import { recordsReducer } from "./records/records.reducer"
import { userReducer } from "./user/user.reducer"


export const reducers = combineReducers({
    quiz: quizReducer,
    records: recordsReducer,
    user: userReducer,
})

