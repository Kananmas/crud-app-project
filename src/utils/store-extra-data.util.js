import supabase from "../services/supabaseClient";
import { store } from "../store";
import { setInDataBase } from "./set-in-database.util";


export async function storeAllDetails() {
    const quiz = store.getState().quiz;
    const { wrongAnswers,
        rightAnswers,
        unanswereds, fastestAnswer, quizId } = quiz
    try {
        await supabase.from('true-answers').insert(rightAnswers)
        await supabase.from('blanks').insert(unanswereds);
        await supabase.from('wrong-answers').insert(wrongAnswers)
        setInDataBase(fastestAnswer, quizId);
    } catch (error) {
        console.log(error.message)
    }
}


