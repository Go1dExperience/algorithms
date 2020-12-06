function properNounCorrection(noun: string): string {
    let result = "";
    noun.split("").forEach((char, idx) => {
        if (!idx) result = result.concat(char.toUpperCase());
        else result = result.concat(char.toLowerCase());
    });
    return result;
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
