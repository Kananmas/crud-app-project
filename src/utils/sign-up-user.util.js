import supabase from "../services/supabaseClient";
import { store } from "../store";

export async function signUpUser() {
    const user = store.getState().user;
    const { email, password } = user;
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