/*
1. Creamos la carpeta server en la raiz
1.1 Crearmos 2 archivos db.json para el json de datos:
  {
  "users": [
    {
      "id": 1,
      "isActive": false,
      "balance": 1397.32,
      "avatar": "http://placehold.it/32x32",
      "first_name": "Ryan",
      "last_name": "Kent",
      "gender": "male"
    },
    {
      "id": 2,
      "isActive": true,
      "balance": 1120.82,
      "avatar": "http://placehold.it/32x32",
      "first_name": "Francine",
      "last_name": "Ingram",
      "gender": "female"
    },
1.2 Creamos una copia db-cpy.json para tener una data de respaldo

2. Instalamos JSON server con el comando:
npm install json-server --save-dev

el --save-dev sugiere que es para desarrollo
3. configuramos el puerto en el que trabajaremos el backend:
  {
  "name": "http-app",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "server": "json-server server/db.json --port 3001"
  },
  "devDependencies": {
    "json-server": "^1.0.0-beta.15",
    "vite": "^8.0.9"
  }
}

Notemos en los
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "server": "json-server server/db.json --port 3001"
  },

Veremos que en server dice el puerto

4. Despues damos el comando en la terminar de npm run server y podremos hacer pruebas en postman
?5. Estructura de carpetas:
    users
      -mappers : Funciones para que Tomemos la información que luce de una manera y la tranformamos a otra
      -models: Representación de como queremos trabajar internamente nuestra app, no importa como regrese el backend los nombres de las propiedades, esto lo hará más robusto a cambios
      -presentation: Funciones para poder mostrarle al usuario
      -store: Lugar centralizado de infromación
      -use-cases: funciones espeficas con funciones especificas
*/
