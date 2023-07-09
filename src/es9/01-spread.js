const user = {username : 'black', age : 23, country: 'CO'};
const { username, ...values} = user;
console.log(username);
console.log(values);