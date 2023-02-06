import supabase from "../services/supabaseClient";

export async function addNewUser(username, email) {
    try {
        const { error } = await supabase.from("users").insert({
            id: Math.random().toString(16).slice(2),
            user_name: username,
            email
        })
        if (!error) {
            localStorage.setItem("username", username);
        }
    } catch (error) {
        console.log(error);
    }
}