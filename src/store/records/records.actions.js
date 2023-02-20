import { FINISH_LOADING_RECORDS, SET_CHOSEN_RECORD, SET_RECORDS, START_LOADING_RECORDS } from "./records.constants";

export function setRecordsAction(payload) {
    return {
        type: SET_RECORDS,
        payload
    }
}

export function startLoadingRecordsAction() {
    return {
        type: START_LOADING_RECORDS,
    }
}

export function finishLoadingRecordsAction() {
    return {
        type: FINISH_LOADING_RECORDS,
    }
}

export function setChosenRecordAction(payload) {
    return {
        type: SET_CHOSEN_RECORD,
        payload
    }
}