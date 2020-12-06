function pigLatin(str: string): string {
    const vowels = ["a", "e", "i", "o", "u"];
    let cluster = "";
    let startingVowel = 0;
    if (vowels.includes(str[0])) return str.concat("way");
    str.split("").some((char, index) => {
        let isVowel = vowels.includes(char);
        if (!isVowel) {
            cluster = cluster.concat(char);
            startingVowel = index;
        }
        return isVowel;
    });
    return str
        .substring(startingVowel + 1)
        .concat(cluster)
        .concat("ay");
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
