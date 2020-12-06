function launchSequenceChecker(
    systemNames: string[],
    stepNumbers: number[]
): boolean {
    // const occurenceObj = systemNames.reduce((acc, value, index) => {
    //     if (!acc[value]) {
    //         acc[value] = [];
    //     }
    //     acc[value].push(stepNumbers[index]);
    //     return acc;
    // }, {});
    // return Object.keys(occurenceObj).every(key => {
    //     return occurenceObj[key].every(
    //         (num: number, index: number, arr: number[]) =>
    //             !index || !arr[index - 1] || num > arr[index - 1]
    //     );
    // });
    const sequence = {};
    for (let i = 0; i < systemNames.length; i++) {
        if (sequence.hasOwnProperty(systemNames[i])) {
            if (sequence[systemNames[i]] >= stepNumbers[i]) return false;
        }
        sequence[systemNames[i]] = stepNumbers[i];
    }
    return true;
}

console.log(
    launchSequenceChecker(
        ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
        [1, 10, 11, 2, 12, 111]
    )
);
console.log(
    launchSequenceChecker(
        ["stage_1", "stage_1", "stage_2", "dragon"],
        [2, 1, 12, 111]
    )
);
