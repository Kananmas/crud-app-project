import supabase from "../../../services/supabaseClient";

export async function replaceResult(id, newScore) {
    try {
        await supabase.from("result-records").update({ quiz_id: id }).eq("score", newScore);

    } catch (error) {
        console.log(error)
    }
}