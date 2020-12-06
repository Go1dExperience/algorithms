function switchLights(a: number[]): number[] {
    let lights = [...a];
    for (let j = 0; j < lights.length; j++) {
        if (a[j]) {
            lights = swapLight(lights, j);
        }
    }
    return lights;
}
function swapLight(light: number[], currentLight: number) {
    for (let i = 0; i < currentLight + 1; i++) {
        light[i] = light[i] === 1 ? 0 : 1;
    }
    return light;
}

console.log(switchLights([1, 1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
