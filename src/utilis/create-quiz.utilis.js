import { wordPicker } from "./word-picker.utilis";

export function createQuiz(wordlist) {
    let reusult = [];
    let clonedList = [...wordlist];

    for (let i = 0; i < 30; i++) {
        reusult[i] = wordPicker(clonedList)
    }

    return reusult;
}
