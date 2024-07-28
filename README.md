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
