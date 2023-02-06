import supabase from "../services/supabaseClient";

export async function setInDataBase(data) {
    const { data: $data } = await supabase.from("result-records").select();
    console.log($data)
    try {
        await supabase.from("result-records").insert(data);
    } catch (error) {
        console.warn(error.message);
    }
}
