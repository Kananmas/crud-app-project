import supabase from "../services/supabaseClient";

export async function setInDataBase(data) {
    const opreation = await supabase.from("results").select();
    const { data: list } = opreation;
    let length = list.length;
    data.id = length + 1;
    try {
        await supabase.from("results").insert(data);
    } catch (error) {
        console.warn(error.message);
    }
}