let result = [];
let final = [];
function flattenArray(arr: any[]): any[] {
    const result = [];
    flatten(arr);
    function flatten(arr: any[]) {
        arr.forEach(ele => {
            if (!Array.isArray(ele)) result.push(ele);
            else flatten(ele);
        });
    }
    return result;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
