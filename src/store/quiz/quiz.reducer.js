import {
  ADD_CORRECT_ANSWER,
  ADD_UNANSWERED_QUESTION,
  ADD_WRONG_ANSWER,
  SET_QUESTIONS,
} from "./quiz.constants";

const initialState = {
  questions: [],
  wrongAnswers: [],
  rightAnswers: [],
  unanswereds: [],
};

export function quizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case ADD_CORRECT_ANSWER:
      state.rightAnswers.push(action.payload);
      return state;
    case ADD_WRONG_ANSWER:
      state.wrongAnswers.push(action.payload);
      return state;
    case ADD_UNANSWERED_QUESTION:
      state.unanswereds.push(action.payload);
      return state;
    default:
      break;
  }
  return state;
}
