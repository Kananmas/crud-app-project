import { combineReducers } from "redux";
//reducers
import { quizReducer } from "./quiz/quiz.reducer";
import users from "./Users/users.reducer";

const reducers = combineReducers({
  quiz: quizReducer,
  users,
});

export default reducers;
