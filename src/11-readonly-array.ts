const numbers: number[] = [1, 2, 3, 4, 5];
const anotherNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.pop();
numbers.unshift(0);

// anotherNumbers no se podra mutar
// anotherNumbers.push(6);
// anotherNumbers.pop();
// anotherNumbers.unshift(0);
anotherNumbers.filter(() => { }); // filter crea un nuevo array basado en el existente por lo que no realiza mutaciones -> otros metodos como map o reduce tampoco mutan un array
