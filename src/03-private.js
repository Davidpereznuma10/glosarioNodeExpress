class user {
    constructor(age, name ){
        this.age= age;
        this.name=name;
    }
    #speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    };
    set #uAge(n){
        this.age=n;
    }
}

const deve = new user(23,"david");
console.log(deve.uAge);
console.log(deve.uAge=15);