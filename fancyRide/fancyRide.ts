function fancyRide(l: number, fares: number[]): string {
    const priceLowerThanFare = fares
        .map(fare => fare * l)
        .filter(fare => fare < 20);
    switch (priceLowerThanFare.length) {
        case 1:
            return "UberX";
        case 2:
            return "UberXL";
        case 3:
            return "UberPlus";
        case 4:
            return "UberBlack";
        case 5:
            return "UberSUV";
        default:
            return "None";
    }
}

console.log(fancyRide(25, [0.3, 0.5, 0.7, 1, 1.3]));
