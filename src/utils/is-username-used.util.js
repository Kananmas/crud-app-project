import supabase from "../services/supabaseClient";
import { store } from "../store";

export const isUsernameUsed = async () => {
    const user = store.getState().user;
    const { username } = user;
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
