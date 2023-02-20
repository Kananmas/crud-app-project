import { FINISH_LOADING_RECORDS, SET_RECORDS, START_LOADING_RECORDS, SET_CHOSEN_RECORD } from "./records.constants"

const initialState = {
    loading: true,
    records: [],
    chosenRecord: 0
}

export function recordsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RECORDS:
            return { ...state, records: action.payload };
        case FINISH_LOADING_RECORDS:
            return { ...state, loading: false }
        case START_LOADING_RECORDS:
            return { ...state, loading: true }
        case SET_CHOSEN_RECORD:
            return { ...state, chosenRecord: action.payload }
        default:
            return state
    }
}