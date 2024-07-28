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
