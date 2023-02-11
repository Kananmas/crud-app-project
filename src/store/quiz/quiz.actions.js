import {
  ADD_CORRECT_ANSWER,
  SET_QUESTIONS,
  ADD_UNANSWERED_QUESTION,
  ADD_WRONG_ANSWER,
  FINISH_LOADING,
  START_LOADING,
  INCREASE_SCORE,
  DECREASE_SCORE,
} from "./quiz.constants";

export function setQuestions(payload) {
  return {
    type: SET_QUESTIONS,
    payload,
  };
}

export function addCorrectAnswer(payload) {
  return {
    type: ADD_CORRECT_ANSWER,
    payload,
  };
}

export function addUnasweredQuestion(payload) {
  return {
    type: ADD_UNANSWERED_QUESTION,
    payload,
  };
}

export function addWrongAnswer(payload) {
  return {
    type: ADD_WRONG_ANSWER,
    payload,
  };
}

export function finishLoadingAction() {
  return {
    type: FINISH_LOADING,
  }
}

export function startLoadingAction() {
  return {
    type: START_LOADING
  }
}

export function incraeseScoreAction() {
  return {
    type: INCREASE_SCORE
  }
}

export function decreaseScoreAction() {
  return {
    type: DECREASE_SCORE
  }
}
