function minimalNumberOfCoins(coins: number[], price: number): number {
    let numberOfCoins = 0;
    let remainder = 0;
    for (let i = coins.length - 1; i >= 0; i--) {
        remainder = price % coins[i];
        if (!remainder) {
            return (numberOfCoins += price / coins[i]);
        } else {
            numberOfCoins += Math.floor(price / coins[i]);
            price = remainder;
        }
    }
    return numberOfCoins;
}
console.log(minimalNumberOfCoins([1, 2, 10], 28));
