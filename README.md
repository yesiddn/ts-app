# ts-app

TypeScript: Tipos avanzados y funciones

## ts-node

Es un paquete que nos permite ejecutar TypeScript directamente en Node.js sin necesidad de compilarlo previamente.

```bash
npm install -D ts-node
```

Si se corren proyectos de front es mejor usar el transpilador de TypeScript, mientras que si se corren proyectos de back este permite poder correr todo el back en TypeScript. Aún así estos son procesos extras que pueden afectar el rendimiento.

### Ejecutar un archivo TypeScript

```bash
npx ts-node src/index.ts
```

## Capacitor

Es un proyecto de código abierto que permite construir aplicaciones móviles multiplataforma con tecnologías web como HTML, CSS y JavaScript.

Esta tiene soporte para TypeScript y es por eso que se va a usar para probar los enums.

En su [web](https://capacitorjs.com/), en la sección de plugins se puede encontrar el plugin "Camera". Hay que instalar la dependencia de este plugin para poder usarlo, pero no va a funcionar porque antes hay que tener un entorno de desarrollo propio para poder probarlo.

```bash
npm install @capacitor/camera
```

## Enums

Un enum es un tipo de dato que nos permite **crear un set de opciones**. Estas opciones son almacenadas bajo una estructura llave-valor similar a un objeto.

## Enums en TypeScript

Veamos algunos aspectos de los _enums_ en TypeScript:

- Los declaramos usando la palabra reservada `enum` seguido del nombre que tendrá este.
- Entre llaves estarán los datos llave-valor.
- Se recomienda que el nombre del `enum` y de las llaves dentro del mismo estén en mayúscula:

```typescript
// ENUM
enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

// TIPO DE DATO USER
type User = {
  username: string;
  role: ROLES;
}

// CONSTANTE
const nicoUser: User = { // `nicoUser` es del tipo de dato User
  username: 'nicobytes',
  role: ROLES.ADMIN // Le asignamos el rol ADMIN que es uno de los 3 roles disponibles
}
```

La ventaja que nos da esto es que disponemos de una lista de valores predeterminados que podemos asignar a una variable o a un atributo de la misma. Por tanto, no podemos asignar otro valor que no este dentro de las opciones que nos brinde el `enum`:  
![Los posibles valores que puede tomar el atributo role (ADMIN, SELLER o CUSTOMER) en la constante nicoUser](https://static.platzi.com/media/articlases/Images/06-los-posibles-valores-que-puede-tomar-el-atributo-role-en-la-constante-nicouser-curso-de-typescript-tipos-avanzados-y-funciones.png)

### Analizando una librería con enums

[Capacitor](https://capacitorjs.com/) es una librería que nos ayuda a implementar aplicaciones multiplataformas. Realizaremos un pequeño análisis aparte de su código para observar cómo hacen empleo de los `enums` y cómo estos nos pueden ayudar en nuestros proyectos.

Podemos realizar la instalación con el siguiente comando:

```bash
npm install @capacitor/camera
```

Ahora veamos el siguiente código que podemos implementar con dicha librería:

```typescript
import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
};
```

Observamos que `CameraResultType` es un `enum` que restringe al atributo `resultType` a tener un valor dentro de las opciones del `enum`. En este caso, dicho atributo recibe el valor de la llave `Uri` del `enum`.

En conclusión, un `enum` nos ayuda a no equivocarnos cuando asignemos valores a una variable reduciendo las posibilidades de asignación a una lista de opciones predefinidas.

## Tuples

Las tuplas o tuples nos permiten crear un array fuertemente tipado especificando el tipo de dato de cada elemento, así como una cantidad definida de elementos que podrá almacenar.

Las tuplas no vienen en el conjunto de tipos de datos por defecto de JavaScript.

Las definimos indicando entre `[]` el tipo de dato que cada elemento tendrá en la tupla.

```typescript
const user: [string, number] = ['nicobytes', 15];
```

Al definir el tipado de cada uno también estamos definiendo la cantidad de valores que tendrá la tupla, por tanto, no podemos agregar más elementos.

```typescript
let user: [string, number];

user = ['nico']; // Error: la tupla debe almacenar 2 valores (un `string` y un `number`)
user = ['nico', true]; // Error: el segundo elemento de la tupla debe ser del tipo `number`
user = ['nico', 20]; // Correcto: el primer elemento es del tipo `string` y el segundo de tipo `number`
```

### Desestructuración

Podemos aplicar desestructuración para asignar a ciertas variables respectivamente los valores dentro de una tupla.

```typescript
const user: [string, number] = ['nicobytes', 15];
const [username, age] = user;
console.log(username); // nicobytes
```

> 💡 Nota: Este tipo de desestructuración también lo podemos ver en el hook `useState` de la librería React.

## Never type

El never type se usa para **funciones que nunca van a terminar o que detienen el programa**. Con esto TypeScript nos ayuda a detectarlos como por ejemplo un ciclo infinito cuando lanzamos un mensaje de error.

### Never type en funciones infinitas

En el siguiente código, TypeScript infiere que el tipo es `never`, ya que su ejecución será infinita.

```typescript
const withoutEnd = () => {
  while (true) {
    console.log('Nunca parar de aprender');
}
}
```

### Never vs. Void

Las funciones del tipo `void` son aquellas que no retornan ningún dato, simplemente ejecutan las instrucciones dentro del bloque de la función. Por tanto, no debemos confundirlas con las de tipo `never`:

```typescript
const voidFunc = () => {
  for(let i = 1; i <= 5; i++){
    console.log(i)
  }
}

voidFunc()

// Función infinita y de tipo Never 👇
const neverFunc = () => {
  while (true) {
    console.log('Nunca parar de aprender');
  }
}
```

### Never type en código con errores

Una función también puede ser del tipo `never` cuando tenemos un `throw` que lance un error y, como resultado, haga detener la ejecución.

```typescript
const fail = (message: string) => { // TypeScript infiere que esta función se de tipo `never`
  throw new Error(message)
}

const example = (input:unknown) => {
  if(typeof input === 'string'){
    return 'Es un string';
  }
  else if (Array.isArray(input)){
    return 'Es un array';
  }
  return fail('Not Match'); // Lanzamos un error
}

console.log(example('Hola')) //'Es un string'
console.log(example([1,1,1,1])) // 'Es un array'
console.log(example(1212)) // error: Uncaught Error: Not Match
console.log(example('Hola después del fail')) // NUNCA SE EJECUTA, porque se lanzó un error previamente
```

## Utility types

Los tipos `Omit` y `Pick` en TypeScript son **utility types** que te permiten crear un nuevo tipo basado en un tipo existente, pero **omitiendo** o **seleccionando** algunas de las propiedades del tipo original.

Los tipos `Partial` y `Required` en TypeScript son utility types que te permiten crear un nuevo tipo basado en un tipo existente, pero haciendo que todas las propiedades de ese tipo sean **opcionales** u **obligatorias**.

El tipo `Readonly` en TypeScript es un utility type que te permite crear un nuevo tipo basado en un otro existente, pero haciendo que todas las propiedades de ese tipo sean de `solo lectura.`

### Omit en TypeScript

Utilizamos la siguiente expresión para definir un `Omit: Omit<T, K>`. Con esto generamos un nuevo tipo que tiene todas las propiedades de `T` excepto las especificadas en `K`. Veamos ejemplo en código:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Omit` para omitir ciertas propiedades de la interfaz User
type UserWithoutContact = Omit<User, 'email' | 'phoneNumber'>; // 👈 Nuevo tipo

// `UserWithoutContact` es ahora un tipo con las propiedades `id` y `name`, pero sin `email` ni `phoneNumber`.

let user: UserWithoutContact = {
  id: 1,
  name: 'Carlos Araujo',
};

console.log(user); // { id: 1, name: 'Carlos Araujo' }
```

En este caso, hemos usado `Omit` para excluir las propiedades `email` y `phoneNumber` de la interfaz `User`. Por lo tanto, el nuevo tipo `UserWithoutContact` solo tiene las propiedades `id` y `name`.

### Pick en TypeScript

Empleamos la siguiente expresión para definir un `Pick: Pick<T, K>`. Con esto producimos un nuevo tipo que solo tiene las propiedades de `T` que se especifican en `K`. Veamos ejemplo en código:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Pick` para seleccionar ciertas propiedades de User
type UserContactInfo = Pick<User, 'email' | 'phoneNumber'>;

// `UserContactInfo` es ahora un tipo con solo las propiedades `email` y `phoneNumber`

let contactInfo: UserContactInfo = {
  email: "user@email.com",
  phoneNumber: "653-951-802"
};

console.log(contactInfo); // { email: "user@email.com", phoneNumber: "653-951-802" }
```

En este caso, hemos empleado `Pick` para seleccionar las propiedades `email` y `phoneNumber` de la interfaz `User`. Por lo tanto, el nuevo tipo `UserContactInfo` solo tiene los atributos `email` y `phoneNumber`.

### Partial type en TypeScript

Utilizamos la siguiente expresión para definir un Partial `type: Partial<T>`. Esto genera un nuevo tipo que tiene todas las propiedades de `T`, pero cada atributo es opcional. Veamos un ejemplo:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Partial` para hacer todas las propiedades de User opcionales
type PartialUser = Partial<User>;

// `PartialUser` es ahora un tipo con todas las propiedades de `User`, pero cada una de ellas es opcional.

let partialUser: PartialUser = {
  id: 1,
  name: 'Benjamin Hernández',
  // Podemos omitir `email` y `phoneNumber` ya que son opcionales en `PartialUser`
};

console.log(partialUser); // { id: 1, name: 'Benjamin Hernández' }
```

Hemos usado Partial para hacer que todas las propiedades de `User` sean opcionales. Por lo tanto, el nuevo tipo `PartialUser` tiene las propiedades `id`, `name`, `email` y `phoneNumber`, pero todas ellas son opcionales.

### Required type en TypeScript

Empleamos la siguiente expresión para definir un Required type: `Required<T>`. Esto genera un nuevo tipo que tiene todas las propiedades de `T`, pero cada atributo es obligatoria. Veamos un ejemplo:

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
  phoneNumber?: string;
}

// Usando `Required` para hacer todas las propiedades de User obligatorias
type RequiredUser = Required<User>;

// `RequiredUser` es ahora un tipo con todas las propiedades de `User`, pero cada una de ellas es obligatoria.

let requiredUser: RequiredUser = {
  id: 1,
  name: 'Fatima Fernández',
  email: 'fatima@email.com',
  phoneNumber: '343-545-789'
  // No podemos omitir `email` y `phoneNumber` ya que son obligatorias en `RequiredUser`
};

console.log(requiredUser); // { id: 1, name: 'Fatima Fernández', email: 'fatima@email.com', phoneNumber: '343-545-789' }
```

Hemos empleado `Required` para hacer que todas las propiedades de `User` sean obligatorias. Por lo tanto, el nuevo tipo `RequiredUser` tiene las propiedades `id`, `name`, `email` y `phoneNumber`, pero todas ellas son obligatorias.

### Readonly type en TypeScript

Utilizamos la siguiente expresión para definir un Readonly type: `Readonly<T>`. Esto genera un nuevo tipo que tiene todas las propiedades de `T`, pero cada propiedad es de solo lectura, lo que significa que una vez que se asigna un valor a la propiedad, no puede ser cambiado. Veamos un ejemplo:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Usando `Readonly` para hacer todas las propiedades de User de solo lectura
type ReadonlyUser = Readonly<User>;

// `ReadonlyUser` es ahora un tipo con todas las propiedades de `User`, pero cada una de ellas es de solo lectura.

let readonlyUser: ReadonlyUser = {
  id: 1,
  name: 'Rosa López',
  email: 'rosa@email.com'
};

console.log(readonlyUser); // { id: 1, name: 'Rosa López', email: 'rosa@email.com' }

// Tratar de cambiar una propiedad lanzaría un error
// readonlyUser.name = 'Jennifer Rodríguez'; // ⛔Error
```

Hemos usado `Readonly` para hacer que todas las propiedades de `User` sean de solo lectura. Por lo tanto, el nuevo tipo `ReadonlyUser` tiene las propiedades `id`, `name` y `email`, pero todas ellas son de solo lectura y no pueden ser cambiadas después de la asignación inicial.

## Acceso por índice en una interfaz en TypeScript

Acceder al **tipado** por **índice** se hace de una manera muy similar a la cual accedemos a valores en arrays dentro de JavaScript, pero en este caso, aplicado a una `interface`, `enum`, entre otros, para acceder al tipo de dato de una propiedad y que dicho tipado sea asignado en otra parte del código.

Veamos un ejemplo de cómo podríamos acceder al tipado de la propiedad de una interfaz y utilizar este tipado en otra parte del código como en el parámetro en la definición de una función:

```typescript
interface Human {
    id: string;
    name: string;
    age: number;
    isAlien: boolean;
}

function createHuman(name: Human["name"]) {
  // code
}
```

En este caso, el parámetro `id` en la función `createHuman` sería un `string`. La ventaja de esto es que si nosotros cambiáramos el tipo de dato de `id` a `number` en la interfaz `Human`, automáticamente el tipo de dato del parámetro name de la función `createHuman` sería number también, pues, el tipado se sincronizaría.

### Cómo usar ReadonlyArray en TypeScript

En `TypeScript`, `ReadonlyArray` es un tipo que representa una **versión de solo lectura de un array**. Esto quiere decir que una vez creado un `ReadonlyArray`, no puedes cambiar sus elementos o su longitud.

La sintaxis para crear un ReadonlyArray en TypeScript es la siguiente:

```typescript
let nombreArray: ReadonlyArray<tipo> = [...];
Donde tipo es el tipado de los elementos del array.

Veamos cómo puedes utilizarlo con un ejemplo:

let numbers: ReadonlyArray<number> = [30, 76, 21, 85, 42];

console.log(numbers[3]); // ✅SÍ está permitido, imprime el valor 85
console.log(numbers.length); // ✅SÍ está permitido, imprime 5 que es la longitud del array

//numbers[0] = 10; // ⛔NO permitido porque se intenta modificar un valor en el array
//numbers.push(6); // ⛔NO permitido porque se intenta agregar un nuevo elemento en el array y con ello aumentar su longitud
```

El variable `numbers` es un `array` de números de solo lectura. Puedes leer los elementos del `array` y puedes consultar su longitud, pero no puedes modificar los elementos ni cambiar la longitud de este. Si intentas hacerlo, TypeScript lanzará un error en tiempo de compilación.
