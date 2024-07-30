const witoutEnd = () => { // esta función se detecta de forma implicita como never porque nunca termina
  while (true) {
    console.log('I will never end');
  }
}

const fail = (message: string) => { // se detecta de forma implicita como never porque siempre lanzara un error y detiene la ejecución
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'It is a string';
  } else if (input instanceof Array) { // Otra forma de validar si es un array es con Array.isArray(input)
    return 'It is an array';
  }

  return fail('I do not know what it is');
}

console.log(example('yesiddn'));
console.log(example([1, 2, 3]));
console.log(example({})); // se detiene la ejecución y lanza un error
console.log(example(19));
