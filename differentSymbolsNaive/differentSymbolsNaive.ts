function differentSymbolsNaive(s: string): number {
    const charCount = [...s].reduce((acc, char) => {
        if (acc[char] === undefined) acc[char] = 1;
        else acc[char]++;
        return acc;
    }, {});
    return Object.keys(charCount).length;
}

console.log(differentSymbolsNaive("cabca"));
