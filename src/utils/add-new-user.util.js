import supabase from "../services/supabaseClient";
import { randomString } from "./random-string.util";
import { store } from "../store";

export async function addNewUser() {
    const signup = store.getState().user;
    const { username, email } = signup
    console.log(username, email)
    try {
        const { error } = await supabase.from("users").insert({
            id: randomString(),
            user_name: username,
            email
        })
        if (!error) {
            localStorage.setItem("initialized", "true");
            localStorage.setItem("username", username);
        }
    } catch (error) {
        console.log(error);
    }
}