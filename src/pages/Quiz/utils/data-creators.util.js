import { randomString } from "../../../utils/random-string.util"

// standrad data is for true answers and wrong answers table
// each key represent a volume and each value is the value we want to set

export function standardDataCreator(randomWord, question, quiz_id) {
    return {
        date: new Date().toDateString(),
        user_name: localStorage.getItem('username'),
        true_answer: question.rightSpelling,
        user_answer: randomWord,
        id: randomString() + randomString(),
        quiz_id
    }
}

// is for storing blank answers in database
// has diffrent key than other two tables
export function blankDataCreator(randomWord, question, quiz_id) {
    return {
        question: randomWord,
        true_answer: question.rightSpelling,
        id: randomString() + randomString(),
        date: new Date().toDateString(),
        user_name: localStorage.getItem('username')
        , quiz_id
    }
}