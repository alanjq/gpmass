# Prueba técnica Alan Jiménez

## Requisitos necesarios para ejecutar la aplicación

### Configura la Base de datos

Crea un archivo .env con los siguientes valores de acuerdo a la configuración de tu instancia de MySQL local.

> DB_HOST=localhost
>
> DB_NAME=blog
>
> DB_USER=**_USUARIO_**
>
> DB_PSWD=**_CONTRASEÑA_**

### Ejecuta los scripts en la consola de MySQL

Ejecuta los scripts en el orden indicado dentro de la consola de MySQL.

`server/mysql/scripts/1-create_db.sql`

`server/mysql/scripts/2-create_tables.sql`

`server/mysql/scripts/3-create_store_procedure.sql`

`server/mysql/scripts/4-use_stored_procedure.sql`

Estos scripts contienen entradas del blog que pueden servir para ver las publicaciones del blog.

## Ejecutar el servidor REST

Ir a la carpeta /server y ejecutar `npm install` para instalar las dependencias necesarias.

Ejecutar el comando `npm start` para iniciar el servidor.

> El servidor se ejecuta en [localhost:3000](https://localhost:3000)


## Ejecutar la aplicación

Ejecutar el comando `npm install` para instalar las dependencias.

Ejecutar el comando `npm run dev` desde la carpeta raíz del proyecto.

> El proyecto se puede ver desde Ir a [localhost:5173](https://localhost:5173)
