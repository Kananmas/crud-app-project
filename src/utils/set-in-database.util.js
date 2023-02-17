import supabase from "../services/supabaseClient";
import { store } from "../store";
import { randomString } from "./random-string.util";

export async function setInDataBase(answerRate, quizId) {
  const quiz = store.getState().quiz

  try {
    const data = {
      id: randomString(),
      quiz_date: new Date().toDateString(),
      score: quiz.score,
      right_answers_count: quiz.rightAnswers.length,
      wrong_answers_count: quiz.wrongAnswers.length,
      unanswereds_count: quiz.unanswereds.length,
      user_name: localStorage.getItem("username"),
      fastest_answer: answerRate,
      quiz_id: quizId,
    }

    await supabase.from("result-records").insert(data);
  } catch (error) {
    console.warn(error.message);
  }
}
