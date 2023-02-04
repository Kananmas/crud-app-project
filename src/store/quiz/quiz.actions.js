import { ADD_CORRECT_ANSWER, SET_QUESTIONS, ADD_UNANSWERED_QUESTION, ADD_WRONG_ANSWER } from "./quiz.constants";

export function setQuestionsAction(payload) {
    return {
        type: SET_QUESTIONS,
        payload,
    }
}

export function addCorrectAnswerAction(payload) {
    return {
        type: ADD_CORRECT_ANSWER,
        payload,
    }
}

export function addUnasweredQuestion(payload) {
    return {
        type: ADD_UNANSWERED_QUESTION,
        payload
    }
}

export function addWrongAnswerAction(payload) {
    return {
        type: ADD_WRONG_ANSWER,
        payload,
    }
}