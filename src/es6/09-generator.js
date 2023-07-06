
function* iterate(array){
    for (let value of array){
        yield value;
    }
}
const it = iterate(["David", "juan ","pedro", "zues", "reagan"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);