interface Pref {
    [key: string]: string[];
}
function proCategorization(
    pros: string[],
    preferences: string[][]
): string[][][] {
    const prefSummary: Pref = pros.reduce((acc, pro, idx) => {
        acc[pro] = preferences[idx];
        return acc;
    }, {});
    const result = [];
    const uniquePref = [];
    for (let pro in prefSummary) {
        if (prefSummary.hasOwnProperty(pro)) {
            prefSummary[pro].forEach((pref: string) => {
                if (!uniquePref.includes(pref)) uniquePref.push(pref);
            });
        }
    }
    uniquePref.forEach((pref: string) => {
        let prefArr = [];
        let userArr = [];
        prefArr.push([pref]);
        Object.keys(prefSummary).forEach(professional => {
            if (prefSummary[professional].includes(pref))
                userArr.push(professional);
        });
        prefArr.push(userArr);
        result.push(prefArr);
    });
    return result;
}

console.log(
    proCategorization(
        ["Jack", "Leon", "Maria"],
        [
            ["Computer repair", "Handyman", "House cleaning"],
            ["Computer lessons", "Computer repair", "Data recovery service"],
            ["Computer lessons", "House cleaning"],
        ]
    )
);
