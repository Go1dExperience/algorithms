function palindromeRearranging(inputString: string): boolean {
    const occurenceObj = inputString.split("").reduce((acc, b) => {
        if (!acc[b]) acc[b] = 1;
        else acc[b]++;
        return acc;
    }, {});
    let oddCount = 0;
    Object.keys(occurenceObj).some(char => {
        if (occurenceObj[char] % 2 !== 0) oddCount++;
        return oddCount === 2;
    });
    return oddCount <= 1;
}

console.log(palindromeRearranging("aabbdcfdc"));
// console.log(palindromeRearranging("aabbcc"));
