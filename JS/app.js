// Max of two Numbers
function Max (num1, num2) {
  if (num1 > num2) console.log(num1)
    else console.log(num2)
}
Max(3,7)

// es6
let number = max(5,8)
console.log(number)
function max (a,b){return (a<b) ? a :b;}


// landscapre or portrait
let size = landscape(90,80)
console.log(size)
function landscape(width, height){
  return (width>height)
}

// FizzBuzz
// divisible by 3 => fizz
// divisible by 5 => Buzz
// divisible by 3 & 5 => fizzBuzz
// not divisible => input
// not a number => 'message'
const output = fizzBuzz('allen')
console.log(output)
function fizzBuzz(input){
  if(typeof input !== 'number')
  return NaN;
  if((input % 3 === 0) && (input % 5 === 0))
  return "FizzBuzz";
  if (input % 3 ===0)
  return 'Fizz';
  if(input % 5 === 0)
  return "Buzz";
  return input;
}


// demerit point
// speed limit = 70
// for every 5 mph abouve => 1 point
// Math.floor(1.3) => 1
// more than 12 points => liscence is suspended
function checkSpeed(speed){
  const speedLimit = 70;
  const mphPoint = 5;

  if(speed < speedLimit + mphPoint){
    console.log('OK');
    return;
    }
    const points = Math.floor((speed- speedLimit) / mphPoint);
    if (points >= 12)
      console.log("licese Suspended")
    else
      console.log('Points', points)
  }
checkSpeed(80);


// Odd and even numbers
showNumbers(10);
function showNumbers (limit) {
  for (let i = 0; i <= limit; i ++) {
    const message = (i % 2 === 0) ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
