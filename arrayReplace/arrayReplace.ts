function arrayReplace(
    inputArray: number[],
    elemToReplace: number,
    substitutionElem: number
): number[] {
    let resultArr: number[] = [];

    resultArr = inputArray.map((elm, idx) =>
        elm === elemToReplace ? substitutionElem : elm
    );
    return resultArr;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
