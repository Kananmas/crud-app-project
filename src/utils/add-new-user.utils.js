import supabase from "../services/supabaseClient";
import { randomString } from "./random-string.util";

export async function addNewUser(username, email) {
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