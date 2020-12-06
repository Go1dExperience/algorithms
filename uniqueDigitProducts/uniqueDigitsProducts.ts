function uniqueDigitProducts(a: number[]): number {
    const uniqueProducts: number[] = [];
    a.forEach(num => {
        let product = num
            .toString()
            .split("")
            .reduce((a, b) => a * parseInt(b), 1);
        if (!uniqueProducts.includes(product)) uniqueProducts.push(product);
    });
    return uniqueProducts.length;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
