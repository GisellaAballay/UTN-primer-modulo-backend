//1º obtener los argumentos pasados por terminal (que viene del index)
//2º desarrollar las funciones que crean los objetos para añadir un usuario y actualizar un usuario
//3º aplicar control de errores entorno a las posibilidades que surja uno 


const createUserObject = (args) => {
  try {
    if (args.length < 5) {
      throw new Error('Faltan argumentos: nombre, apellido, email y password son requeridos.');
    }
    
    const user = {
      nombre: args[1],
      apellido: args[2],
      email: args[3],
      password: args[4],
    };

    console.log('Usuario creado con éxito', user);
    return user;

  } catch (error) {
    
    console.error('Error al crear el usuario:', error.message);
    return null;
  }
};

const createUpdateUserObject = (args) => {
  try {
    if (args.length < 6) {
      throw new Error('Faltan argumentos: id, nombre, apellido, email y password son requeridos.');
    }
    const updatedUser = {
      id: args[1], 
      nombre: args[2],
      apellido: args[3],
      email: args[4],
      password: args[5],
    };

    console.log('Usuario actualizado', updatedUser);
    return updatedUser;

  } catch (error) {
    console.error('Error al actualizar el usuario:', error.message);
    return null; 
  }
};

export { createUserObject, createUpdateUserObject };