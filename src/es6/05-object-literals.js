/*
 * Enache objet literals
 */

function newUser(user, age,country, uId) {
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("JD", 23, "Col", 77));