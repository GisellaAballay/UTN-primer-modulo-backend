//1º obtener los argumentos pasados por terminal (que viene del index)
//2º desarrollar las funciones que crean los objetos para añadir un usuario y actualizar un usuario
//3º aplicar control de errores entorno a las posibilidades que surja uno 


const createUserObject = (args) => {
  try {
    if (args.length < 4) {
      throw new Error('Faltan argumentos: nombre, apellido, email y password son requeridos.');
    }
    
    const user = {
      nombre: args[0],
      apellido: args[1],
      email: args[2],
      password: args[3],
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
    if (args.length < 5) {
      throw new Error('Faltan argumentos: id, nombre, apellido, email y password son requeridos.');
    }
    const updatedUser = {
      id: args[0], 
      nombre: args[1],
      apellido: args[2],
      email: args[3],
      password: args[4],
    };

    console.log('Usuario actualizado', updatedUser);
    return updatedUser;

  } catch (error) {
    console.error('Error al actualizar el usuario:', error.message);
    return null; 
  }
};

export { createUserObject, createUpdateUserObject };