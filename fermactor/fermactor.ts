function fermactor(n: number): number[] {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let ferma = i ** 2 - j ** 2;
            if (ferma === n) return [i, j];
        }
    }
}

console.log(fermactor(15));
