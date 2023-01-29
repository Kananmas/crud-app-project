import { createQuestion } from "./create-question.utilis";

export function wordPicker(wordlist) {
    let chosenIndex = Math.floor(Math.random() * wordlist.length);

    let question = createQuestion(wordlist[chosenIndex]);

    wordlist.splice(chosenIndex, 1);

    return question;
}

console.log(wordPicker(['hello', 'how', 'what', 'now']))