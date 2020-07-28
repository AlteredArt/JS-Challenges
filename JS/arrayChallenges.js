// range
function arrayFromRange (min, max){
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
    return output;
}
const array = arrayFromRange(1,4);
console.log(array, 'range');
// includes
const numbers = [1,2,3,4];
console.log(numbers.includes(1), 'includes')
// includes function
function includes(array, searchElement) {
  for (let element of array)
  if (element === searchElement)
  return true;
  return false;
}
console.log(includes(numbers, -1), 'includes function');
// except
const cost = [1,2,3,4,5,6]

function except(array, excluded){
  const output = [];
  for (let element of array)
  if (!excluded.includes(element))
    output.push(element);
    return output;
}
const output = except(cost, [1, 2]);
console.log(output, 'except');
// moving an element
const list = [1,2,3,4,5,6];

function move (array, index, offset){
  const out = [...array];
  const element = out.splice(index, 1)[0];
  out.splice(index + offset, 0, element);
  return out;
}
const out = move(list, 0, 3)
console.log(out, 'move');
// counting occurences
const occurances = [1,2,3,4,4,5]
const count = countOccurances(occurances, 4);

function countOccurances(array, searchElement){
  // let count = 0;
  // for (let element of array)
  //   if(element === searchElement)
  //     count++;
  // return count;
// with reduce
return array.reduce((accumulator, current)=>{
  const occurance = (current === searchElement) ? 1 : 0;
  return accumulator + occurance;
},0);
}
console.log(count, 'count occurances');
// get the max with and without reduce
const numList = [1,2,3,4,5,6]
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
console.log(max, 'max number')
// Movies
const movies = [
  {
    title: 'a',
    year: 2018,
    rating: 4.3
  },
  {
    title: 'b',
    year: 2018,
    rating: 4.7
  },
  {
    title: 'c',
    year: 2018,
    rating: 3
  },
  {
    title: 'd',
    year: 2017,
    rating: 4.5
  },
]
// all movies in 2018 with rating > 4
// sort them by their rating
// descending order
// pick their title
const titles = movies
  .filter(m=> m.year === 2018 && m.rating >= 4)
  .sort((a,b,c,d) => a.rating - b.rating)
  .reverse()
  .map(m => m.title)

  console.log(titles)
