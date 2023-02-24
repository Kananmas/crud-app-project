import { INDICATE_FAILURE, INDICATE_SUCCESS, RESET_USER, SET_EMAIL, SET_PASSWORD, SET_USERNAME, SIGN_IN_USER, SIGN_UP_USER } from "./user.constants";

// this actions set's the email field of the user reducer to it's payload
// payload is string
export function setEmailAction(payload) {
    return {
        type: SET_EMAIL,
        payload
    }
}

// this action set's the password field of the user reducer to its payload 
// payload is string

export function setPasswordAction(payload) {
    return {
        type: SET_PASSWORD,
        payload
    }
}

// this actions set's username field of the user reducer to it's payload
// payload is string

export function setUserNameAction(payload) {
    return {
        type: SET_USERNAME,
        payload
    }
}

// this actions is for us to find out if the sign up or sign in is successful
export function indicateSuccessAction() {
    return {
        type: INDICATE_SUCCESS,
    }
}

// this action is for use to find out if the sing up or sing is were not successful
export function indicateFailureAction() {
    return {
        type: INDICATE_FAILURE
    }
}

// this is an saga action that starts the signin saga
export function signInUserAction() {
    return {
        type: SIGN_IN_USER,
    }
}

// this is a saga action that starts singup saga
export function signUpUserAction() {
    return {
        type: SIGN_UP_USER,
    }
}
// this action reset's the reducer into it fromer state
export function resetUserAction() {
    return {
        type: RESET_USER
    }
}