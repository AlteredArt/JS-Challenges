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
showNumbers(5);
function showNumbers (limit) {
  for (let i = 0; i <= limit; i ++) {
    const message = (i % 2 === 0) ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// takes an array and returns the number of truthy elements
const array = [0,1,2,3, '', 6, null]
function countTruthy(array) {
  let count = 0
  for (let value of array)
   if ( value)
    count ++;
    console.log(count);
}
 countTruthy(array)

 // string properties
const movie = {
  title: 'a',
  releaseDate: 2016,
  rating: 4.5,
  director: 'b'
}

 function showProperties(obj) {
   for (let key in obj)
   if ( typeof obj[key] === 'string')
   console.log(key, obj[key])
 }
showProperties(movie);

// sum of multiples 3 and 5
console.log(sum(10));

function sum (limit){
  let sum = 0
  for (let i = 0; i <= limit; i++)
    if ( i % 3 === 0 || i % 5 === 0)
    sum += i;
    return sum;
}


// calculate grade average
// 1-59: f
// 60-69: d
// 70-79: c
// 80 - 89: b
// 90-100: a

const marks = [80, 80, 90]

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return 'C';
  if (average < 90) return "B";
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for ( let value of array)
  sum += value;
return  sum / marks.length;
}


// show stars nested loop

showStars(5);

function showStars(rows){
    for (let row = 1; row <= rows; row++) {
      let pattern = '';
      for (let i =0; i < row; i++)
      pattern += '*';
      console.log(pattern)
    }
}


// prime numbers

showPrimes(10);
function showPrimes(limit) {
  for ( let number = 2; number <=limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for ( let factor = 2; factor < number; factor++)
  if (number % factor === 0)
    return false;

    return true;
}
