<h1>Sistema de Gestión de Usuarios</h1>

<h3>Descripción</h3>

Este sistema es una aplicación de línea de comandos desarrollada en Node.js que permite gestionar usuarios mediante operaciones (Crear, Leer, Actualizar y Eliminar). Los datos de los usuarios se almacenan en un archivo JSON, y los errores se registran en un archivo de log.

<h3>Funcionalidades</h3>

<h5>Listar los usuarios <b>list</b> : <br></5> Muestra una lista de todos los usuarios registrados en el sistema. 

<h5>Obtener un usuario por ID <b>get</b> :<br></5>
Muestra la información de un usuario específico mediante su ID.

Agregar un nuevo usuario <b>add</b> : <br> Permite agregar un nuevo usuario al sistema proporcionando sus datos.

Actualizar un usuario existente <b>update</b> : <br>
Actualiza la información de un usuario existente mediante su ID.

Eliminar un usuario  <b>delete</b> : <br> Elimina un usuario del sistema mediante su ID.

<h3>Instrucciones de Uso</h3> 

Para utilizar la aplicación, debes ejecutar comandos en la línea de comandos con el siguiente formato:

node  index.js  <comando> [argumentos]
Comandos Disponibles

getUsers
Descripción: Muestra la lista de todos los usuarios.

Uso:

node  index.js  getUsers
getUserById <id>
Descripción: Muestra el usuario con el ID especificado.

Uso:

node  index.js  getUsers
addUser <nombre> <apellido> <email> <password>
Descripción: Agrega un nuevo usuario.
Uso:
node index.js addUser <nombre> <apellido> <email> <password>
updateUser <id> <nombre> <apellido> <email> <password>
Descripción: Actualiza la información de un usuario existente.
Uso:
node index.js updateUser <id> <nombre> <apellido> <email> <password>
deleteUser <id>
Descripción: Elimina el usuario con el ID especificado.
Uso
node index.js deleteUser <id>
Instrucciones
Descripción: Muestra las instrucciones de uso y los comandos disponibles.
Uso
npm run instrucciones
Manejo de Errores

El sistema captura y registra cualquier error que ocurra durante la ejecución de las operaciones. Los errores se almacenan en error/log.json con detalles como:

ID del error
Tipo de error
Fecha y hora
Esto facilita la depuración y el seguimiento de problemas en la aplicación.

Notas

Debés contar con Node.js instalado en tu sistema para ejecutar la aplicación.
Los IDs de usuario son generados automáticamente utilizando UUID al crear un nuevo usuario.
Este proyecto es parte de la diplomatura Full Stack de la UTN BA y representa el primer trabajo práctico de Backend.