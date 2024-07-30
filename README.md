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
