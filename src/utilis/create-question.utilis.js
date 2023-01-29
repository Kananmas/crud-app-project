export function createQuestion(word) {
    let splited = word.split('');
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let chosenWord = letters[Math.floor(Math.random() * letters.length)]
    splited[Math.floor(Math.random() * splited.length)] = chosenWord;

    return {
        rightSpelling: word,
        shownSpelling: splited.join(''),
    }
}