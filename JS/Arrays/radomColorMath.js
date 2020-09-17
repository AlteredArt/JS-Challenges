console.log('random colors')

colors=["red", 'blue', 'green', 'orange']

var timer = window.setInterval(changeColor, 1000);

function changeColor(){
    var n = Math.round(Math.random()*4);
    document.body.style.backgroundColor = colors[n];
}


answer = prompt("What is 8x8?")
if(answer == 64){
    alert('Correct!')
}
