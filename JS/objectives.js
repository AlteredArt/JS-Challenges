// object literal
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function (){
    console.log('draw')
  }
};

circle.color ="blue",
circle.make = function(){}
delete circle.make;
console.log(circle)
// factory functions
function createCircle(radius){
  return {
    radius,
    draw(){console.log('draw')}
}
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2)

// constructor function uses pascal notation
function Square(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const square = new Square(1);
console.log(square)
const anotherSquare = new Square(1);


// functions are objects
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw')
  }
}
Circle.call({}, 1)
Circle.apply({}, [1,2,3])

const another = new Circle(1);
// values vs reference types
let x = 10;
let y = x;
x = 20;
// objects are stored differently in memory
let t = { value: 10};
let u = t;
x.value = 20;
// reference a object value
let obj ={ value: 10};
function increase(obj){
  obj.value++
}
increase(obj);
console.log(obj);
// enumerating objects
const triangle = {
  radius: 1,
  draw(){
    console,log('triangle')
  }
};

for (let key in triangle)
  console.log(key, triangle[key])

for( let key of Object.keys(circle))
  console.log(key);

for ( let entry of Object.entries(circle))
  console.log(entry);

if ("color" in triangle) console.log('yes');
// Math objects
Math.round(1.5)
// string primative
const message ="hi";
// string object
const anotherMessage = new String("hello");
// escape notation
const mess = 'This is my \'first message'
// new line
const messa = 'This is\n new line'
// string primative
const greeting = 'This is my' + 'First message'
// Template Literals
const message2 = `Hello my ${greeting} name`
// date object
const date1 = new Date()
const now = new Date('May 11 2018 09:00')
now.setFullYear(2017);

// Excersizes
// make an address object with a street city and zipcode
let address = {
  street: '10800 McCombs st',
  city: 'El Paso',
  zipCode: 89214
}

function showAddress(address){
  for (let key in address)
  console.log(key, address[key])
}
showAddress(address)
// factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  }
}
let address1 = createAddress('a', 'b', 'c')
console.log(address1)
// constructor function
function MakeAddress(street, city, zipCode){
  this.street = street;
  this.cty = city;
  this.zipCode = zipCode;
}
let address3 = new MakeAddress('a', 'b', 'c')
console.log(address3)
// Object equality
let address4 = new MakeAddress('a','b','c')

function areEqual(address3, address4){
  return address3.street  === address4.street &&
  address3.city === address4.city &&
  address4.zipCode === address4.zipCode;
}

function areSame(address3, address4){
  return address3 === address4;
}
