
// reducing an array
const cost = [1,4,5,6]
let sum = 0;
for (let n of cost)
  sum += n;
console.log(sum, 'sum')
// reduce method
const add = cost.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(add, 'reduce')