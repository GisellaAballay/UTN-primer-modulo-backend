<h1>Sistema de Gestión de Usuarios</h1>

<h3>Descripción</h3>

Este sistema es una aplicación de línea de comandos desarrollada en Node.js que permite gestionar usuarios mediante operaciones (Crear, Leer, Actualizar y Eliminar). Los datos de los usuarios se almacenan en un archivo JSON, y los errores se registran en un archivo de log.

<h3>Funcionalidades</h3>

<h5>Listar los usuarios(list):</h5><br>
Muestra una lista de todos los usuarios registrados en el sistema. 

<h5>Obtener un usuario por ID(get):</h5><br>
Muestra la información de un usuario específico mediante su ID.

<h5>Agregar un nuevo usuario(add): </h5><br>
Permite agregar un nuevo usuario al sistema proporcionando sus datos.

<h5>Actualizar un usuario existente(update):</h5><br>
Actualiza la información de un usuario existente mediante su ID.

<h5>Eliminar un usuario(delete):</h5><br>
Elimina un usuario del sistema mediante su ID.

<h3>Notas</h3>
Debés contar con Node.js instalado en tu sistema para ejecutar la aplicación.
Los IDs de usuario son generados automáticamente utilizando UUID al crear un nuevo usuario.
