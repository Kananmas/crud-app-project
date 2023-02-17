import supabase from "../../../services/supabaseClient";

const username = localStorage.getItem("username");


export async function getLastResult({ setRightAnswersCount, setUnansweredsCount, setWrongAnswersCount, setScore, setQuizId, setFastestAnswer }) {
    try {
        const { data, error } = await supabase.from("result-records").select();
        if (!error) {
            data.forEach((element) => {
                if (element.user_name === username) {
                    setRightAnswersCount(element.right_answers_count);
                    setUnansweredsCount(element.unanswereds_count);
                    setWrongAnswersCount(element.wrong_answers_count);
                    setScore(element.score);
                    setQuizId(element.quiz_id);
                    setFastestAnswer(element.fastest_answer)
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}