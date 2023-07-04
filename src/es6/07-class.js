/*
* Declarando la clase
*/
class user {};
/*
* Instacia de una clase
*/
const newUser = new user();



class Admin {
    /*
    *Declarando metodos
    */
    greeting(){
        return 'hello';
    }
}

const ad =  new Admin();
console.log(ad.greeting());
const dev = new Admin();
console.log( dev.greeting());

class own {
    constructor(){
        console.log('Nuevo dueño');
    }
    greeting(){
        return 'hello';
    }
}

const own1 = new own();


/*
 * This 
 */

class hp {
    constructor(name){
        this.name=name;
    }
    spack(){
        return 'Hello'
    }
    greeting(){
        return `${this.spack()} ${this.name}`;
    }
}

const hp1 = new hp('perro');

console.log(hp1.greeting());


class user {
    constructor(age, name ){
        this.age= age;
        this.name=name;
    }
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    };
    set uAge(n){
        this.age=n;
    }
}

const deve = new user(23,"david");
console.log(deve.uAge);
console.log(deve.uAge=15);