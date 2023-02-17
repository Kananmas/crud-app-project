import supabase from "../services/supabaseClient";


export async function getRecords() {
    let result = [];

    try {
        const { data, error } = await supabase.from("result-records").select();

        if (!error) {
            data.forEach((node) => {
                if (node.user_name === localStorage.getItem("username")) {
                    result.push({
                        id: node.quiz_id,
                        rights: [],
                        wrongs: [],
                        blanks: [],
                        date: node.quiz_date,
                        fastestAnswer: node.fastest_answer,
                        rightsCount: node.right_answers_count,
                        wrongsCount: node.wrong_answers_count,
                        blanksCount: node.unanswereds_count,
                        score: node.score,
                    });
                }
            });
            const { data: wrongsData, error: wrongsError } = await supabase
                .from("wrong-answers")
                .select();
            const { data: rightsData, error: rightsError } = await supabase
                .from("true-answers")
                .select();
            const { data: blanksData, error: blanksError } = await supabase
                .from("blanks")
                .select();

            if (!blanksError && !rightsError && !wrongsError) {
                addByWrongById(wrongsData, result);
                addByRightById(rightsData, result);
                addByBlankById(blanksData, result);

                return result;
            }

        }
    } catch (error) {
        console.log(error)
    }
}

function addByWrongById(data, list) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (data[i].quiz_id == list[j].id) {
                list[j].wrongs.push(data[i]);
            }
        }
    }
}

function addByRightById(data, list) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (data[i].quiz_id == list[j].id) {
                list[j].rights.push(data[i]);
            }
        }
    }
}

function addByBlankById(data, list) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (data[i].quiz_id == list[j].id) {
                list[j].blanks.push(data[i]);
            }
        }
    }
}
