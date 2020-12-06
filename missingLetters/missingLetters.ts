function missingLetters(str: string): string {
    const letterArr = "abcdefghijklmnopqrstuvwxyz".split("");
    let missing = letterArr.filter(
        (letter, index) =>
            ![...str].includes(letter) &&
            index < letterArr.indexOf(str[str.length - 1])
    );
    return missing.join() || undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
