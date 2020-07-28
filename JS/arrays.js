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
// spread operator
const fifth = [1,2,3]
const sixth = [4,5,6]
const join = [...fifth,['a','b'], ...sixth];
console.log(join, 'join')
const copy = [...join]
// iterating an array
const lists = [7,8,9,10]
for(let list of lists)
console.log(list)
lists.forEach((list, index) => console.log(index, list, 'list'))
// joining Array
const make = [8,9,10,11];
const made = make.join('!')
console.log(made)
const message = 'This is my first message';
const parts = message.split('');
console.log(parts, 'split')
const combine = parts.join('-')
console.log(combine, 'join')
// sorting arrays
const array = [4,3,2]
array.sort();
console.log(array, 'sort')
array.reverse();
console.log(array, 'reverse')
// testing elements in an array you can also use some
const numArray = [1,2,3]
const allPositive = numArray.every(function(value){
  return value >=0;
})
console.log(allPositive, 'All Posotive')
// filtering an array and mapping
const numbersArray = [1,-1,2,-7,3];
const items = numbersArray
  .filter(v => v >= 0)
  .map(n =>({value: n}))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value)
console.log(items, 'filtered and mapped')
// reducing an array
const cost = [1,4,5,6]
let sum = 0;
for (let n of cost)
  sum += n;
console.log(sum, 'sum')
// reduce method
const add = cost.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(add, 'reduce')
