import supabase from "../../../services/supabaseClient";

export const isUsernameUsed = async (username) => {
    try {
        const { data, error } = await supabase.from("users").select();
        let isUnique = false;
        if (!error) {
            isUnique = !data.some((element) => {
                return element.user_name === username;
            });
            return isUnique;
        }
    } catch (error) {
        console.log(error)
    }

};
