function firstNotRepeatingCharacter(s: string): string {
    let answer = "";
    const occurenceObj = [...s].reduce((acc, char) => {
        if (!acc[char]) acc[char] = 1;
        else acc[char]++;
        return acc;
    }, {});
    Object.keys(occurenceObj).some(el => {
        if (occurenceObj[el] === 1) {
            answer = el;
            return true;
        }
        return false;
    });
    return answer === "" ? "_" : answer;
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
