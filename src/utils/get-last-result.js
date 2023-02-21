import supabase from "../services/supabaseClient";

const username = localStorage.getItem("username");


export async function getLastResult() {
    let result = { wrongAnswers: [], rightAnswers: [], unanswereds: [], quizId: '', loading: false, questions: [], fastestAnswer: 30, score: 0 }
    try {
        const { data, error } = await supabase.from("result-records").select();
        if (!error) {
            data.forEach((element) => {
                if (element.user_name === username) {
                    result.score = element.score;
                    result.quizId = element.quiz_id;
                    result.fastestAnswer = element.fastest_answer;
                }
            });
        }

        const { data: rightAnswers, error: rightAnswersError } = await supabase.from('true-answers').select();
        const { data: wrongAnswers, error: wrongAnswersError } = await supabase.from('wrong-answers').select();
        const { data: unanswereds, error: unansweredsError } = await supabase.from('blanks').select();

        if (!rightAnswersError && !wrongAnswersError && !unansweredsError) {
            result.rightAnswers = addByQuizId(rightAnswers, result.quizId);
            result.wrongAnswers = addByQuizId(wrongAnswers, result.quizId);
            result.unanswereds = addByQuizId(unanswereds, result.quizId);

            return result;
        }

    } catch (error) {
        console.log(error);
    }
}

function addByQuizId(data, quizId) {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        const currentData = data[i];
        if (currentData.quiz_id == quizId) {
            result.push(currentData);
        }
    }

    return result;
}