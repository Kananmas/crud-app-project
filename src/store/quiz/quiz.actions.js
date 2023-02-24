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
  SET_FASTERST_ANSWER,
  SET_QUIZ_TO,
  LOADING_PERVIOUS_RESULT,
  SET_ALL_DATA,
  TRADE_SCORE
} from "./quiz.constants";
// sets questions that saga got from data base
// payload is array
export function setQuestions(payload) {
  return {
    type: SET_QUESTIONS,
    payload,
  };
}
// adds a correct answer to the correct answers list when user answer is correct
// payload is object
export function addCorrectAnswer(payload) {
  return {
    type: ADD_CORRECT_ANSWER,
    payload,
  };
}
// adds a unanswered to the wrong answers list when user did not answer
// payload is object
export function addUnasweredQuestion(payload) {
  return {
    type: ADD_UNANSWERED_QUESTION,
    payload,
  };
}
// adds a wrong answer to the wrong answers list when user answer is wrong
// payload is object
export function addWrongAnswer(payload) {
  return {
    type: ADD_WRONG_ANSWER,
    payload,
  };
}

//finishes loading so user starts to take the quiz
export function finishLoadingAction() {
  return {
    type: FINISH_LOADING_QUESTIONS,
  }
}

// set loading to ture when user wants to get questions from data base
// this action is also a saga action
export function startLoadingAction() {
  return {
    type: START_LOADING_QUESTIONS
  }
}
// this action changes for when user answer is right
export function incraeseScoreAction() {
  return {
    type: INCREASE_SCORE
  }
}

// this action changes for when user answer is wrong
export function decreaseScoreAction() {
  return {
    type: DECREASE_SCORE
  }
}

// resets store when user wants to take another quiz
export function resetAction() {
  return {
    type: RESET,
  }
}

// genereates a quiz id to diffrentiate each quiz and it results form other quizes
export function genereateQuizIdAction() {
  return {
    type: GENETRATE_QUIZ_ID,
    payload: randomString()
  }
}

// sets fastest answer to payload 
// payload is number
export function setFastestAnswerAction(payload) {
  return {
    type: SET_FASTERST_ANSWER,
    payload
  }
}

// set's quiz to a previous result saga got from the data base
// payload is an object
export function setQuizToAction(payload) {
  return {
    type: SET_QUIZ_TO,
    payload
  }
}

// sets loading to false
export function loadingPerviousResult() {
  return {
    type: LOADING_PERVIOUS_RESULT,
  }
}

// sets data to data base this is an saga action
export function setAllDataAction() {
  return {
    type: SET_ALL_DATA
  }
}

// updates the score before updating data base this is also a saga action
export function tradeScoreAction() {
  return {
    type: TRADE_SCORE
  }
}