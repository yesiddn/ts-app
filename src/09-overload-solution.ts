// yesid => [y, e, s, i, d] => string => string[]
// [y, e, s, i, d] => yesid => string[] => string

// a esto se le llama overload de funciones que esta permitido en typescript
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
// recomenaciones para el overload de funciones:
// 1. si se recibe un valor de tipo unknown se debe dejar de ultimo para que no interfiera con los otros tipos
// 2. si el overload se hace por cantidad de parametros y se retorna siempre solo un tipo de dato, es bueno evaluar si se puede solucionar con parametros opcionales -> diff(one: string[], two?: number, three?: boolean): string
// 3. si se reciben un dato que puede tener dos tipos de datos pero independientemente de cual sea el tipo de dato se retorna el mismo tipo de dato, se puede solucionar con union types -> parseString(input: string | number): string[]

// export function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

// de estsa forma se deja un tanto mas generica la logica por si hay necesidad de agregar mas tipos de datos
export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  }
}

const result = parseString('yesid');
result.reverse(); // con esto ya se hace la asercion de tipos y no habria necesidad de hacer un type guard
console.log('result', result);

const resultTwo = parseString(['y', 'e', 's', 'i', 'd']);
resultTwo.toUpperCase();
console.log('result two', resultTwo);
