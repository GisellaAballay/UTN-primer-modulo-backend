import { randomUUID } from "node:crypto";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const handleError = (error, path) => {
  let dbError = [];

  try {
    if(existsSync(path)) {
    const fileData = readFileSync(path, 'utf-8');
    dbError = JSON.parse(fileData) || []
    }
  } catch (err) {
    console.error('Error al leer el archivo', err);
    dbError = [];
  };

 
  const newError = {
    id: randomUUID(),
    type: error.message,
    date: new Date().toISOString(),
  };
  
  dbError.push(newError);

  try {
    writeFileSync(path, JSON.stringify(dbError, null, 2), 'utf-8');
  } catch (err) {
    console.error ("Error al escribir al escribir el archivo de errorres", err);
  };
};


export { handleError };


