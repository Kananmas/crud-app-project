import supabase from "../services/supabaseClient";
import { store } from "../store";

export async function updateResult() {
    const { quizId, score } = store.getState().quiz;
    try {
        await supabase.from("result-records").update({ quiz_id: quizId }).eq("score", score - 100);
    } catch (error) {
        console.log(error)
    }
}