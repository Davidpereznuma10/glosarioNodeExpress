/*
*Arrays Destructuting 
*/

let fruits  = ["manzana", "plátano", "naranja", "uva", "sandía", "pera", "mango", "piña", "fresa", "kiwi", "cereza", "melón", "mandarina", "limón", "papaya"];
let [manzana, plátano, naranja, uva, sandía, pera, mango, piña, fresa, kiwi, cereza, melón, mandarina, limón, papaya] = fruits;

console.log(naranja, kiwi, manzana);


/*
 * Object Destructuring
 */

let user = {username: 'David', age:23};
let {username, age} = user;

console.log(username, age);

/**
 * Spread Operator
 */

let person = {name : "David", age:23};
let country = "Col";
let data = {...person, country}

console.log( data);

/**
 * Values
 */

function sum(num, ...values){
console.log(values);
console.log(num + values[2]);
}

sum(5,2,6,7)