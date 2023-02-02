export function wordPicker(wordlist) {
    let chosenIndex = Math.floor(Math.random() * wordlist.length);

    let { right_spelling: rightSpelling, wrong_spelling: wrongSpelling } = wordlist.splice(chosenIndex, 1)[0];

    return {
        rightSpelling,
        wrongSpelling
    };
}
