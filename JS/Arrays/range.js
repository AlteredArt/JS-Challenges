// range
function arrayFromRange (min, max){
    const output = [];
    for (let i = min; i <= max; i++)
      output.push(i);
      return output;
  }
  const arrayFrom = arrayFromRange(1,4);
  console.log('range',arrayFrom);
  
  