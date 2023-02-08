import supabase from "../../../services/supabaseClient";

const username = localStorage.getItem("username");


export async function getResultFromDatabase({ setRightAnswersCount, setUnansweredsCount, setWrongAnswersCount, setScore, setQuizId }) {
    try {
        const { data, error } = await supabase.from("result-records").select();
        if (!error) {
            data.forEach((element) => {
                if (element.user_name === username) {
                    setRightAnswersCount(element.right_answers_count);
                    setUnansweredsCount(element.unanswereds_count);
                    setWrongAnswersCount(element.wrong_answers_count);
                    setScore(element.score);
                    setQuizId(element.id);
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}