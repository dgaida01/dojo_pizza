// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);


function pizzaoven(crustType, sauceType, cheeses, toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;      //expect an array
    pizza.toppings=toppings;   //expect an array
    return pizza;
}


// var pizza1=pizzaoven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
// var pizza2=pizzaoven("hand tossed", "marinara",["mozzarella","feta"],["mushrooms", "olives", "onions"]);
// var pizza3=pizzaoven("thin crust","vodka sauce",["chedder","jack","munster"],["peppers","onion","pepperoni"]);
// var pizza3=pizzaoven("thin crust","marinara",["marbel","pepper jack","havarti"],["pinapple","onion","ham"]);

function randomPizza(){
var possCrust = ["deep dish","hand tossed","thin crust","cheese stuffed","garlic knot"];
var possSauce = ["traditional","marinara","vodka sauce","fettuccine"];
var possCheese= ["mozzarella","feta","chedder","jack","munster","pepper jack","havarti","colby"];
var possToppings=["pinapple","onion", "ham", "pepperoni","bananna peppers","sweet peppers","bbq chicken", "bacon","egg"];

console.log(  Math.floor((Math.random())*(possCrust.length)));

var crustChoice = possCrust[Math.floor(Math.random()*possCrust.length)];
var sauceChoice = possSauce[Math.floor(Math.random()*possSauce.length)];
var cheeseChoice =[];
var toppingChoice =[];


//randomly decide how many cheeses then populate for that amount
var numCheese = Math.floor(Math.random()*possCheese.length);
if(numCheese ==0){
    numCheese=1;
}
//randomly decide how many toppings
var numTopping = Math.floor(Math.random()*possToppings.length);
if(numTopping == 0){
    numTopping=1;
}
console.log("this pizza will have "+numCheese+"Cheeses and "+numTopping+" toppings")
for(i=0;i<numCheese;i++){
    cheeseChoice.push(possCheese[Math.floor(Math.random()*possCheese.length)]);
}
for(i=0;i<numTopping;i++){
    toppingChoice.push(possToppings[Math.floor(Math.random()*possToppings.length)]);
}


return pizzaoven(crustChoice,sauceChoice,cheeseChoice,toppingChoice);
}

var pizzaRando = randomPizza();
console.log(pizzaRando);