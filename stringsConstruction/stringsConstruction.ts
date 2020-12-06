interface CharCount {
    [key: string]: number;
}
function getCharCount(a: string): CharCount {
    const charCount: CharCount = {};
    a.split("").forEach(char => {
        if (!charCount[char]) charCount[char] = 1;
        else charCount[char]++;
    });
    return charCount;
}
function stringsConstruction(a: string, b: string): number {
    const aCharCount = getCharCount(a);
    const bCharCount = getCharCount(b);
    const countOfEachChar: number[] = [];
    for (let char in aCharCount) {
        if (bCharCount.hasOwnProperty(char)) {
            countOfEachChar.push(
                Math.floor(bCharCount[char] / aCharCount[char])
            );
        } else {
            return 0;
        }
    }
    return Math.min(...countOfEachChar);
}

console.log(stringsConstruction("abc", "abccba"));
