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
  this.draw = fucntion(){
    console.log('draw')
  }
}
Circle.call({}, 1)
Circle.apply({}, [1,2,3])

const another = new Circle(1);
