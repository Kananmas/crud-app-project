import { FINISH_LOADING_RECORDS, SET_CHOSEN_RECORD, SET_RECORDS, START_LOADING_RECORDS } from "./records.constants";

// set's records of the records reducer to payload
// payload is an array 
export function setRecordsAction(payload) {
    return {
        type: SET_RECORDS,
        payload
    }
}

// set's loading to true
export function startLoadingRecordsAction() {
    return {
        type: START_LOADING_RECORDS,
    }
}

// set's loading to false
export function finishLoadingRecordsAction() {
    return {
        type: FINISH_LOADING_RECORDS,
    }
}

// set's chosen record to a new number
// payload is a number
export function setChosenRecordAction(payload) {
    return {
        type: SET_CHOSEN_RECORD,
        payload
    }
}