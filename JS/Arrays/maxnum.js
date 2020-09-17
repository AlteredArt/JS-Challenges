// get the max with and without reduce
const numList = [1,2,3,28,7,4,5,6]
const max = getMax(numList);

function getMax(array) {
  if (array.length === 0) return undefined;
  // let max = array[0];
  // for (let i= 1; i < array.length; i++)
  //   if (array[i] > max)
  //   max = array[i];
  //   return max;
  return array.reduce((acc, curr) => (acc > curr) ? acc : curr);
}
console.log('max number',max)