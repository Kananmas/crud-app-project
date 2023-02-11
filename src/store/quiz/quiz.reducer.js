import {
  SET_QUESTIONS,
  ADD_CORRECT_ANSWER,
  ADD_UNANSWERED_QUESTION,
  ADD_WRONG_ANSWER,
  DECREASE_SCORE,
  FINISH_LOADING,
  INCREASE_SCORE,
  SET_USERNAME,
  START_LOADING,
} from "./quiz.constants";

const initialState = {
  questions: [],
  wrongAnswers: [],
  rightAnswers: [],
  unanswereds: [],
  score: 0,
  loading: true,
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
    case INCREASE_SCORE:
      return { ...state, score: state.score + 10 }
    case DECREASE_SCORE:
      return { ...state, score: state.score - 5 }
    case START_LOADING:
      return { ...state, loading: true };
    case FINISH_LOADING:
      return { ...state, loading: false };
    default:
      break;
  }
  return state;
}
