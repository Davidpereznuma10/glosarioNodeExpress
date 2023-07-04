let hello = "Hello";
let world = "world";

let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

/*
* Templates Literals
*/ 

let epicPhrase2 = `${hello} ${world}!`;
console.log( epicPhrase2);

/*
* Muti-line strings
*/ 

let lorem  = 'esto es un string \n' + 'esto es otra linea';

let lorem2 = `
esto es algo epico
Esto sigue siendo epico`;

console.log(lorem);
console.log(lorem2);