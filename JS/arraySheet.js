// Arrays are numbered lists with indexes
const colors = ['red', 'blue', 'green'];

// in an Array
for (let index in colors)
    console.log("for let in:", index, colors[index])

// for of ideal for arrays
for (let color of colors)
    console.log('for let of:', color, colors);

//use strict es5 for concat
var a = [6].concat(colors, [10])
console.log("concat:", a)

//Spread Operator in Arrays
let b = [6, ...colors, 10];
console.log("spread in:", b);

//function spread
function print(...z) {
    return [1, 2, 3, ...z]
}
console.log('spred func:', print(4, 5, 6))

//new array
const array = [1, 2, 3, 41]

//double
const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log("forEach double:", double)

//map
const mapArray = array.map(num => num * 2)
console.log("map:", mapArray)

//filter
const filterArray = array.filter(num => num < 3 || num > 40)
console.log("filter", filterArray)

// reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log("reducer", array.reduce(reducer, 5));

console.log('Starting Arrays')
var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
// character array
console.log("array list", characters);
// character array length
console.log("length of array", characters.length);
// Last index of character
console.log("last index of array", characters[characters.length - 1]);
// index of array
console.log("array index", characters[2]);
// pushing to an array
characters.push('Anakin');
console.log("array push", characters, "add to last");
// poping from an array
characters.pop();
console.log("array pop", characters, "remove the last");
// unshifting from an array
characters.unshift("C3PO");
console.log("array unshift", characters, "add to begin");
//shifiting an array
characters.shift("R2D2");
console.log("array shift", characters, "remove from begin");
// sorting an array
console.log("array sort alpha", characters.sort());
//includes in an array
console.log("includes", characters.includes("luke"));
// contacting
console.log("concat", characters.concat(["meow"]))
