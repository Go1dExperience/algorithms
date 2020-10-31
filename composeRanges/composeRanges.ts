// function composeRanges(nums: number[]): string[] {
//     if (nums.length < 1) return ["Empty"];
//     const ranges: any[] = [{ start: nums[0], end: nums[0] }];

//     for (let i = 1; i < nums.length; i++) {
//         if (ranges[ranges.length - 1].end + 1 === nums[i])
//             ranges[ranges.length - 1].end = nums[i];
//         else ranges.push({ start: nums[i], end: nums[i] });
//     }
//     for (let i = 0; i < ranges.length; i++) {
//         if (ranges[i].start !== ranges[i].end)
//             ranges[i] = `${ranges[i].start} -> ${ranges[i].end}`;
//         else ranges[i] = ranges[i].start.toString();
//     }
//     return ranges;
// }
function composeRanges(nums: number[]): string[] {
    if (nums.length < 1) return ["Invalid"];
    let accArr = [nums[0]];
    let result: string[] = [];
    for (let i = 1; i < nums.length + 1; i++) {
        if (accArr[accArr.length - 1] + 1 === nums[i]) {
            accArr.push(nums[i]);
        } else {
            if (accArr.length > 1) {
                result.push(`${accArr[0]} -> ${accArr[accArr.length - 1]}`);
            } else {
                result.push(`${accArr[0]}`);
            }
            accArr = [nums[i]];
        }
    }
    return result;
}

console.log(composeRanges([-1, 1, 2, 6, 7, 9, 10, 11]));
