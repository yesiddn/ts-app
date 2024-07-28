// array convencional
const prices: (number | string)[] = [100, 75, 42];
prices.push(33);
prices.push('99');
// se pueden agregar tantos elementos como se quiera

// tuple -> importa el orden y el tipo de dato
// const user: [string, number, boolean] = ['yesiddn', 19, true]; // se debe respetar el orden y el tipo de dato

let user: [string, number, boolean];
// user = [19, 'yesiddn', true]; // no se puede asignar un string a un number
user = ['yesiddn', 19, true];
console.log(user);

const [username, age] = user;
console.log(username);
console.log(age);
