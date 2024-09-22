// Averiguar que importar de NODE para realizar el hash del pass
// Averiguar como "activar" la lectura de las variables de entorno del archivo .env (dotenv)

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import dotenv from 'dotenv';
import { handleError } from "./utils/handleError.js";
import { get } from "node:http";
import { FILE } from "node:dns";

dotenv.config();

// 1° recuperar variables de entorno
const PATH_FILE = process.env.PATH_FILE || './users.json';
// 2° Declarar los metodos

// Obtener los usuarios
const getUsers = (urlFile = PATH_FILE) => {
  try {
    if(!urlFile) {
      throw new Error("Archivo de usuario no encontrado")
    }

    const existsFile = existsSync(urlFile);

    if(!existsFile) {
      writeFileSync(urlFile, JSON.stringify([]));
      throw new Error("El archivo no existe, uno nuevo fue creado.");
    }

    const users = JSON.parse(readFileSync(urlFile));
    return users;
  
  } catch (error) {
     const objError = handleError()
     return objError;
  }

  // } catch (error) {
    // handleError(error, './error.log');
    // return { error: error.message };
  // }

};

// const response = getUsers();
// console.log(response);

// Obtener un usuario por el id
const getUserById = (id) => {
  try {
    const users = getUsers();
    const user = users.find((user) => user.id === id);
    if (!user) throw new Error("Usuario no encontrado");
    return user;

  } catch (error) { 
    const objError = handleError()
    return objError;
  }
};

// addUser recibe un objeto con toda la data para el nuevo usuario
// valida que esten los datos míminos para añadir un nuevo usuario
// valida que el nombre, apellido e email sea un string, que el email no se repita
// hashea la contraseña antes de registrar al usuario

// ¿puede ser async(userData)?
const addUser = (userData) => {
  try {
    const { nombre, apellido, email, password } = userData;

    if (typeof nombre !== "string" || typeof apellido !== "string") throw new Error("Nombre y apellido deben ser cadena de texto.");
  
    if (!email || typeof email !== 'string') throw new Error("Mail inválido");

    if (!email || !password) throw new Error("El email y la contraseña son requeridos.")

    const users = getUsers();
    const existsUser = users.find((user) => user.email === email);
    
    if (existsUser) return { error: "El usuario ya existe" }
    
    // Hashear la contraseña 
    // npm install brcypt
    // import bcrypt from 'bcrypt';
    // const hashedPassword = awair bcrypt.hash(password, 10);

    const newUser = {
      id: randomUUID(),
      nombre,
      apellido,
      email,
      password, 
      // password: hashedPassword, para guardar la contraseña
      isLoggedId: false,
    };

    users.push(newUser);
    writeFileSync(PATH_FILE, JSON.stringify(users));

    return newUser;

  } catch (error) {
    const objError = handleError()
    return objError;
  }
};  

// todos los datos del usuario seleccionado se podrían modificar menos el ID
// si se modifica la pass debería ser nuevamente hasheada
// si se modifica el email, validar que este no exista

// Actualizar un usuario: const updateUser = async (id, userData) => ...
const updateUser = (id, userData) => {
  try{
    const { nombre, apellido, email, password } = userData;

    const users = getUsers();
    const existsUser = users.find((user) => user.id === id);

    if (!existsUser) return {error: "El ususario no existe"}

    if (nombre) existsUser.nombre = nombre;
    if (apellido) existsUser.apellido = apellido;
    if (email) existsUser.email = email;
    if (password) existsUser.password = password;
    // if (password) existsUser.password = await bcrypt.hash(password, 10);

    writeFileSync(PATH_FILE, JSON.stringify(users));

    return existsUser;

  } catch (error) { 
    const objError = handleError()
    return objError;
  }
};

const deleteUser = (id) => {
  try{
    const users = getUsers();
    const existsUser = users.find((user) => user.id === id);

    if (!existsUser) return {error: "Usuario no encontrado"}

    const updateUsers = users.filter((user) => user.id !== id);

    writeFileSync(PATH_FILE, JSON.stringify(updateUsers));

    return existsUser;

  } catch (error) {
    const objError = handleError()
    return objError; 
  }
};

export { getUsers, getUserById, addUser, updateUser, deleteUser };