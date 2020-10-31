function companyBotStrategy(trainingData: number[][]): number {
    let totalCorrectAnswer = 0,
        totalCorrectTime = 0;
    trainingData.forEach(answer => {
        if (answer[1] === 1) {
            totalCorrectAnswer++;
            totalCorrectTime += answer[0];
        }
    });
    return totalCorrectTime / totalCorrectAnswer || 0;
}

console.log(
    companyBotStrategy([
        [3, 1],
        [6, 1],
        [4, 1],
        [5, 1],
    ])
);
console.log(
    companyBotStrategy([
        [4, 1],
        [4, -1],
        [0, 0],
        [6, 1],
    ])
);
console.log(
    companyBotStrategy([
        [4, -1],
        [0, 0],
        [5, -1],
    ])
);
