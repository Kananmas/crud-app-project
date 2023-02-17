import supabase from "../../../services/supabaseClient";
import { randomString } from "../../../utils/random-string.util";

// stores wrong answer questions in wrong answer table 

export async function storeWrongAnswerData(list) {
    try {
        await supabase.from('wrong-answers').insert(list)
    } catch (error) {
        console.log(error.message)
    }

}

//stores right answer questions in right answer table

export async function storeRightAnswerData(list) {
    try {
        await supabase.from('true-answers').insert(list)
    } catch (error) {
        console.log(error.message)
    }
}

//store unanswered questions in blanks table

export async function storeUnansweredData(list) {
    try {
        await supabase.from('blanks').insert(list);
    } catch (error) {
        console.log(error.message)
    }
}


// standrad data is for true answers and wrong answers table
// each key represent a volume and each value is the value we want to set

export function standardDataCreator(randomWord, question, quiz_id) {
    return {
        date: new Date().toDateString(),
        user_name: localStorage.getItem('username'),
        true_answer: question.rightSpelling,
        user_answer: randomWord,
        id: randomString(),
        quiz_id
    }
}

// is for storing blank answers in database
// has diffrent key than other two tables
export function blankDataCreator(randomWord, question, quiz_id) {
    return {
        question: randomWord,
        true_answer: question.rightSpelling,
        id: randomString(),
        date: new Date().toDateString(),
        user_name: localStorage.getItem('username')
        , quiz_id
    }
}