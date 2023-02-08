import supabase from "../../../services/supabaseClient";

export async function signInUser(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (!error) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}