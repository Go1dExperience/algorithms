function longestDigitsPrefix(inputString: string): string {
    const charArray = inputString.split("");
    let prefix = "";
    charArray.some(char => {
        if (!parseInt(char)) return true;
        prefix += char;
    });
    return prefix;
}

console.log(longestDigitsPrefix("123aa1"));
