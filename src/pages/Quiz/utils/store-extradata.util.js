import supabase from "../../../services/supabaseClient";

let baseData = {
    date: new Date().toDateString(),
    user_name: localStorage.getItem('username')
}

export async function storeWrongAnswerData(data) {
    try {
        data = Object.assign({}, data, baseData);
        await supabase.from('wrong-answers').insert(data)
    } catch (error) {
        console.log(error.message)
    }

}

export async function storeRightAnswerData(data) {
    try {
        data = Object.assign({}, data, baseData);
        await supabase.from('true-answers').insert(data)
    } catch (error) {
        console.log(error.message)
    }
}


export async function storeUnansweredData(data) {
    try {
        data = Object.assign({}, data, baseData)
        await supabase.from('blanks').insert(data);
    } catch (error) {
        console.log(error.message)
    }
}
