console.log('min or max')
//works for strings
console.log('strings:', Math.min(1, 4, 5, 6, 7, 8))
console.log('strings:', Math.max(1, 4, 5, 6, 10, 7, 8))
//for arrays
console.log('array:', Math.min(...[1, 4, 5, 6, 7, 8]))
console.log("array:", Math.max(...[1, 4, 5, 6, 7, 8]))
//functions
const array = [2, 5, 6, 10, 4, 12]
console.log('func:', Math.min.apply(null, array))
console.log('func:', Math.max.apply(null, array))

let max = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
        max = array[i];
        console.log("setting max to " + max)
    }
}

let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
        console.log("setting min to " + min);
    }
}

console.log(min)
console.log(max)
