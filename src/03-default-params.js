function  newUswr(name, age, country) {
    var name = name || "David";
    var  age = age || 23;
    var country = country || "Col";
    console.log(name, age, country);
}

newUswr();
newUswr("tigre", 54, "mx");

/*
* nueva forma
*/


function newAdmin(name = "Zeus", age = 6, country = "Nor") {
    console.log(name, age, country);
}


newAdmin();
newAdmin("Reagan", 26, "Rus")