import { INDICATE_FAILURE, INDICATE_SUCCESS, RESET_USER, SET_EMAIL, SET_PASSWORD, SET_USERNAME } from "./user.constants";

const initailState = {
    email: '',
    password: '',
    username: '',
    status: '',
}


export function userReducer(state = initailState, action) {
    switch (action.type) {
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_PASSWORD:
            return { ...state, password: action.payload };
        case SET_USERNAME:
            return { ...state, username: action.payload };
        case INDICATE_SUCCESS:
            return { ...state, status: 'Success' }
        case INDICATE_FAILURE:
            return { ...state, status: 'Failure' }
        case RESET_USER:
            return { ...initailState }
        default:
            return state;
    }
}