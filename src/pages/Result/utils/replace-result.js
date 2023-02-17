import supabase from "../../../services/supabaseClient";

export async function replaceResult(id, newScore) {
    try {
        console.log(id, newScore)
        const { error } = await supabase.from("result-records").update({ id: id }).eq("score", newScore);
        console.log(error)

    } catch (error) {
        console.log(error)
    }
}