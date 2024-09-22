// 1º recibir los argumentos pasados por la terminal
// 2º enviarlos a .utils/createObjectUser (en caso de crear o actualizar el usuario)
// 3º evaluar que accion quiere realizar el usuario (list, search/get, add, update, delete)
// 4º devolver el output al cliente final

import { createUserObject, createUpdateUserObject } from './utils/createObjectUser';

import { getUsers, getUserById, addUser, updateUser, deleteUser } from './modules.js'; 
 
const action = process.argv[2];  
const args = process.argv.slice(3); 

const handleUserObject = (action, args) => {
  if (action === 'add') {
    return createUserObject(args); 
  } else if (action === 'update') {
    return createUpdateUserObject(args);  //para actualizar
  }
  return null;
};


switch (action) {
  case 'list': {
    const users = getUsers();
    console.log('Lista de usuarios: ', users);
    break;
  }
  
  case 'get': {
    const id = args [0];
    const user = getUserById(id);
    console.log(`Usuario con ID ${id}`, user);
    break;
  } 

  case 'add': {
    const newUser = handleUserObject('add', args);
    if (newUser) {
      const addedUser = addUser(newUser);
      console.log('Usuario añadido exitosamente', addedUser);
    } else {
      console.log('Error al crear el objeto del usuario.');
    }
    break;
  }
  
  case 'update': {
    
    const id = args[0];
    const updatedUserData = handleUserObject('update', args.slice(1));  
    if (updatedUserData) {
      const updatedUser = updateUser(id, updatedUserData);
      console.log('Usuario actualizado exitosamente:', updatedUser);
    } else {
      console.log('Error al crear el objeto del usuario.');
    }
    break;
  }

  case 'delete': {
    const id = args[0]; 
    const deletedUser = deleteUser(id);
    console.log('Usuario eliminado:', deletedUser);
    break;
  }

  default:
    console.log('Acción no reconocida. Usa "list", "get", "add", "update", o "delete".');

}