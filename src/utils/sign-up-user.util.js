import supabase from "../services/supabaseClient";

export async function signUpUser(email, password, username) {
    try {
        const { data, error } = await supabase.auth.signUp(
            {
                email,
                password,
            },
            {
                username,
            }
        );
        if (!error) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}