// filtering an array and mapping
const numbersArray = [1,-1,2,-7,3];
const items = numbersArray
  .filter(v => v >= 0)
  .map(n =>({value: n}))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value)
console.log(items, 'filtered and mapped')