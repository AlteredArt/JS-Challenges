// for each loop, convert all the names to lower case besides thorin
console.log("Use for Each loop to capitalize Thorin")
let dwarves = ["Bifur", "Bofur", "Bombur", "Fifi", "kildi", "oin", "Glorin", "Thorin", "Balin", "Dwalin", "Nori", "Dori"];

dwarves.forEach(function(item, index, array){
if(item === "Thorin"){
  item= item.toUpperCase();
}else{
  item= item.toLowerCase();
}
  console.log(index, item);
})