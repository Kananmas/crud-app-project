export function wordPicker(wordlist) {
    let chosenIndex = Math.floor(Math.random() * wordlist.length);

    let { right_spelling: rightSpelling, wrong_spelling: wrongSpelling } = wordlist[chosenIndex];

    return {
        rightSpelling,
        wrongSpelling
    };
}
