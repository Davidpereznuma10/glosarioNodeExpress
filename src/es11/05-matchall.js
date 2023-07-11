const regex = /\b(apple)+\b/g;

const fruits = 'apple, banan, kiwi, apple, letuse,ect, apple';

for (const match of fruits.matchAll(regex)){
    console.log(match);
}