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