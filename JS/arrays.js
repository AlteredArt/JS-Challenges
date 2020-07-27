const numbers = [3,4]
// end remove last / add last
const last = numbers.pop()
numbers.push(5,6)
// begining remove first /add first
const first = numbers.shift()
numbers.unshift(1,2)
// middle remove middle / add middle
numbers.splice(2,2)
numbers.splice(2,0,'a','b' )
console.log(numbers)
// you can add a second argument called from index of
const number = [1,2,3,4];
console.log(number.indexOf(2))
console.log(number.lastIndexOf(1))
console.log(number.indexOf(1) !== -1)
console.log(number.includes(1));
// includes dont work with objects, use find instead
const courses =[
  {id: 1,name: 'a'},
  {id: 2,name: 'b'},
]
// can also use findIndex
var found = courses.find(course => course.name === 'a');
console.log(found)
// empyting an array
let type = [1,2,3,4];
// this still stores the old object in memory
let another = type
type = []
console.log(type, another)
// solution2
type.length = 0
// solution 3
another.splice(0, another.length)
// solution4
while (another.length > 0) another.pop();
console.log(another)
// combining and slicing
const third = [3,4,5];
const fourth = [6,7,8];
const combined = third.concat(fourth)
console.log(combined)
// slicing
const slice = combined.slice(2,4)
console.log(slice)
