// 1º recibir los argumentos pasados por la terminal
// 2º enviarlos a .utils/createObjectUser (en caso de crear o actualizar el usuario)
// 3º evaluar que accion quiere realizar el usuario (list, search/get, add, update, delete)
// 4º devolver el output al cliente final

import { getUsers, addUsers, updatedUser, deleteUser } from './models.js'; 
import { createUserObject, createUpdateUserObject } from './utils/createObjectUser';


const action = process.argv[2];  
const args = process.argv.slice(3); 

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