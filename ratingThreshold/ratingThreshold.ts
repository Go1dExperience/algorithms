function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    const averageArr = [];
    const result: number[] = [];
    ratings.forEach(rate =>
        averageArr.push(rate.reduce((a, b) => a + b, 0) / rate.length)
    );
    averageArr.forEach((ave, idx) => {
        if (ave < threshold) result.push(idx);
    });
    return result;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
