import supabase from "../../../services/supabaseClient";

export async function setInDataBase(data) {

    try {
        await supabase.from("result-records").insert(data);
    } catch (error) {
        console.warn(error.message);
    }
}
