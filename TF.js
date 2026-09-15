//false values
let credits=null;
if(credits>0){
  console.log("You have credits available.");
}else{
    console.log("Sorry, you have no credits available.");
}
let price=0;
if(price>0){
  console.log("The item is available for purchase.");
}else{
    console.log("Sorry, the item is out of stock.");
}
let name;
console.log(name); // This will log 'undefined' since 'name' is declared but not initialized.
//true value
let age=20;
if(age>=18){
  console.log("You are an adult.");
}else{
    console.log("You are a kid.");
}
let n=2;
if("hello"){
    console.log("This is a truthy value.");
}else{
    console.log("This is a falsy value.");
}
let vehicle="bike";
if([]){
    console.log("This is a truthy value.");
}else{
    console.log("This is a falsy value.");
}
