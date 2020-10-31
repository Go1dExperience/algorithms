const objFromStr = (s: string) => {
    let result = {};
    s.split("").forEach(char => {
        if (!result[char]) result[char] = 1;
        else result[char]++;
    });
    return result;
};

function commonCharacterCount(s1: string, s2: string): number {
    let common = 0;
    const s1Obj = objFromStr(s1);
    const s2Obj = objFromStr(s2);
    Object.keys(s1Obj).forEach(key => {
        if (s2Obj[key])
            common += s1Obj[key] > s2Obj[key] ? s2Obj[key] : s1Obj[key];
    });
    return common;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
