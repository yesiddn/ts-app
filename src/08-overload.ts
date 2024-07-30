// yesid => [y, e, s, i, d] => string => string[]
// [y, e, s, i, d] => yesid => string[] => string

// problema: no se puede inferir el tipo de dato que retorna la funcion parseString
function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

// typescript no puede inferir el tipo de dato que retorna parseString por lo que para poder tener la inferencia de tipos se debe hacer un condicional para asegurarse de que el tipo de dato que se retorna sea el correcto
const result = parseString('yesid');
// if (Array.isArray(result)) {
//   result.reverse(); // sin el condicional typescript no podria inferir que result es un array
// }
console.log('result', result);

const resultTwo = parseString(['y', 'e', 's', 'i', 'd']);
// resultTwo.toUpperCase();
console.log('result two', resultTwo);
