console.log("Numbers")
// Max of two Numbers (if loop)
function Max (num1, num2) {
    if (num1 > num2) return(num1)
      else return(num2)
  }
  console.log("Max ifloop", Max(3,7))
// es6
function max (a,b){return (a<b) ? a :b}
let number = max(5,8)
console.log("Max ES6", number)  

// Odd and even numbers
function showNumbers (limit) {
  for (let i = 0; i <= limit; i ++) {
    const message = (i % 2 === 0) ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
console.log("Odd & Even", showNumbers(5));
  
//find the sum of multiples of 3 and 5
function sum (limit){
    let sum = 0
    for (let i = 0; i <= limit; i++)
      if ( i % 3 === 0 || i % 5 === 0)
      sum += i;
      return sum;
  }
  console.log("sum of mul ifloop", sum(15));





