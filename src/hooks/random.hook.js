import { useMemo } from "react";

export function useRandom(question, dependencies) {
    let word = useMemo(() => {
        let index = Math.round(Math.random());
        if (index) {
            return question.wrongSpelling;
        }
        return question.rightSpelling;
    }, dependencies);

    return word;
}