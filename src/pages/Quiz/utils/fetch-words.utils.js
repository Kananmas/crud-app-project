import supabase from "../../../services/supabaseClient";
import { createQuiz } from "../../../utils/create-quiz.utils";

export const fetchWords = async () => {
    let result = [];
    try {
        const { data } = await supabase.from("questions").select();

        if (data) {
            result = createQuiz(data);
        }
    } catch (error) {
        console.log(error);
    }
    return result;
};