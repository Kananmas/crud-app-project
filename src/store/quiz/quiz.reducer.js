
import {
  SET_QUESTIONS,
  ADD_CORRECT_ANSWER,
  ADD_UNANSWERED_QUESTION,
  ADD_WRONG_ANSWER,
  DECREASE_SCORE,
  FINISH_LOADING_QUESTIONS,
  INCREASE_SCORE,
  START_LOADING_QUESTIONS,
  RESET,
  GENETRATE_QUIZ_ID,
  SET_FASTERST_ANSWER,
  SET_QUIZ_TO,
  LOADING_PERVIOUS_RESULT,
} from "./quiz.constants";

// quiz id is used for diffrentiate between quizes user took during one day
// we generate a quiz id right after creating store
const initialState = {
  questions: [],
  wrongAnswers: [],
  rightAnswers: [],
  unanswereds: [],
  score: 0,
  loading: true,
  quizId: '',
  fastestAnswer: 30,
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
    case START_LOADING_QUESTIONS:
      return { ...state, loading: true };
    case FINISH_LOADING_QUESTIONS:
      return { ...state, loading: false };
    case RESET:
      return { ...initialState, loading: state.loading };
    case GENETRATE_QUIZ_ID:
      return { ...state, quizId: action.payload }
    case SET_FASTERST_ANSWER:
      return { ...state, fastestAnswer: action.payload }
    case SET_QUIZ_TO:
      return { ...action.payload }
    case LOADING_PERVIOUS_RESULT:
      return { ...state, loading: true };
    default:
      break;
  }
  return state;
}
