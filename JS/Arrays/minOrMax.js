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


//extra
function minMax(arr) {
    arr.sort(function (a, b) { return a - b });
    return [arr[0], arr[arr.length - 1]];

}

//2
function minMax(arr) {
    arr = arr.sort(function (a, b) {
        return a - b
    })
    return [arr[0], arr[arr.length - 1]]
}

//3
function minMax(arr) {
    var returnArr = [];
    var min = arr[0];
    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    returnArr.push(min);
    returnArr.push(max);

    return returnArr;
}