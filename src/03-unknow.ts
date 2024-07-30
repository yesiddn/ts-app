let anyVar: any;
anyVar = 19;
anyVar = 'yesiddn';
anyVar = true;
anyVar = [1, 2, 3];

let isNew: boolean = anyVar;

anyVar.doSomthing();

let unknownVar: unknown;
unknownVar = 19;
unknownVar = 'yesiddn';
unknownVar = true;
unknownVar = [1, 2, 3];

// unknownVar.doSomthing(); // marcara error si no se hace antes una validacion de tipo

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
