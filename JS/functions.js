// sum (1,2,3,4) => 10
// also accepts this an Array
// Array.isArray()
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]]
  return items.reduce((a,b) => a + b);
}
console.log(sum(1,2,3,4,6,5,4))


// find the area of a circle
const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}
console.log(circle.area)


// error handling
try {
const numbers = [1,2,3,1,4];
const count = countOccurances(numbers, 1);
console.log(count)
}
catch (e) {
  console.log(e.message);
}
function countOccurances(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurance = (current === searchElement) ? 1 : 0;
    return accumulator + occurance;
  }, 0);
}
