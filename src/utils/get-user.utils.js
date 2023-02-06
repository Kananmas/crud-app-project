import supabase from "../services/supabaseClient";

export async function getUser(email) {
    try {
        const { data } = await supabase.from("users").select();

        console.log(data);

        if (data) {
            for (let i = 0; i < data.length; i++) {
                const currentData = data[i];
                if (currentData.email === email) {
                    if (!localStorage.getItem("username")) {
                        localStorage.setItem("username", currentData.user_name)
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }

}