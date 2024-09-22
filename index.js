// 1º recibir los argumentos pasados por la terminal
// 2º enviarlos a .utils/createObjectUser (en caso de crear o actualizar el usuario)
// 3º evaluar que accion quiere realizar el usuario (list, search/get, add, update, delete)
// 4º devolver el output al cliente final

import { createUserObject, createUpdateUserObject } from './utils/createObjectUser';

import { getUsers, addUsers, updatedUser, deleteUser } from '.models.js'; 

// 1º Recibir los argumentos pasados por la terminal

const action = process.argv[2];  
const args = process.argv.slice(3); 

// 2º Funcion para manejar la creación o actualización de usuarios

const handleUserObject = (action, args) => {
  if (action === 'add') {
    return createUserObject(args);  // Si es agregar usuario, se envían los argumentos
  } else if (action === 'update') {
    return createUpdateUserObject(args);  // Si es para actualizar
  }
  return null;
};

// 3º
switch (action) {
  case 'createUser':
    createUserObject(args);
    break;
  case 'updateUser':
    createUpdateUserObject(args);
    break;
  default:
    console.log('Acción no reconocido. Usa "createUser" o "updateUser".');
}