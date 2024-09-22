import { randomUUID } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const handleError = (error, path) => {
  const dbError = [];

// intentar leer y parsear el archivo de errores que ya existen

  try {
    const fileData = readFileSync(path, 'utf-8');
    dbError = JSON.parse(fileData) || [];
  } catch (err) {
    console.error('Error al leer el archivo', err);
    dbError = [];
  };

  // crea el nuevo error 
  const newError = {
    id: randomUUID(),
    type: error.message,
    date: new Date().toISOString(),
  }

  //  agrega el error al array 
  dbError.push(newError);
};

export { handleError };


