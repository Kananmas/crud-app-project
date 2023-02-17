import { randomString } from "../../utils/random-string.util";
import {
  ADD_CORRECT_ANSWER,
  SET_QUESTIONS,
  ADD_UNANSWERED_QUESTION,
  ADD_WRONG_ANSWER,
  FINISH_LOADING_QUESTIONS,
  START_LOADING_QUESTIONS,
  INCREASE_SCORE,
  DECREASE_SCORE,
  RESET,
  GENETRATE_QUIZ_ID,
  SET_FASTERST_ANSWER
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
    type: FINISH_LOADING_QUESTIONS,
  }
}

export function startLoadingAction() {
  return {
    type: START_LOADING_QUESTIONS
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


export function resetAction() {
  return {
    type: RESET,
  }
}


export function genereateQuizIdAction() {
  return {
    type: GENETRATE_QUIZ_ID,
    payload: randomString()
  }
}


export function setFastestAnswerAction(payload) {
  return {
    type: SET_FASTERST_ANSWER,
    payload
  }
}