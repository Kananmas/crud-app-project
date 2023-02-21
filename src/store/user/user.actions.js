import { INDICATE_FAILURE, INDICATE_SUCCESS, RESET_USER, SET_EMAIL, SET_PASSWORD, SET_USERNAME, SIGN_IN_USER, SIGN_UP_USER } from "./user.constants";


export function setEmailAction(payload) {
    return {
        type: SET_EMAIL,
        payload
    }
}

export function setPasswordAction(payload) {
    return {
        type: SET_PASSWORD,
        payload
    }
}

export function setUserNameAction(payload) {
    return {
        type: SET_USERNAME,
        payload
    }
}

export function indicateSuccessAction() {
    return {
        type: INDICATE_SUCCESS,
    }
}

export function indicateFailureAction() {
    return {
        type: INDICATE_FAILURE
    }
}

export function signInUserAction() {
    return {
        type: SIGN_IN_USER,
    }
}

export function signUpUserAction() {
    return {
        type: SIGN_UP_USER,
    }
}

export function resetUserAction() {
    return {
        type: RESET_USER
    }
}