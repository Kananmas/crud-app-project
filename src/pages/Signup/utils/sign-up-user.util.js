import supabase from "../../../services/supabaseClient";

export async function signUpUser(email, password) {
    try {
        const { data, error } = await supabase.auth.signUp(
            {
                email,
                password,
            }
        );
        if (!error) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}