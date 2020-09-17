// except
const cost = [1,2,3,4,5,6]

function except(array, excluded){
  const output = [];
  for (let element of array)
  if (!excluded.includes(element))
    output.push(element);
    return output;
}
console.log('except', except(cost, [1, 2, 6, 8]));