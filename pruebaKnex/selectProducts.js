import options from "./options/mysql.js";
import knex from "knex";

const database = knex(options);

// database('products').select('*').then(result => console.log(result)).catch(error => console.log(error)).finally(() => database.destroy())
// de esta manera viene hidratado (habilitado para mas operaciones de base de datos) y no es un objeto plano
database('products').select('*').then(result => console.log(JSON.parse(JSON.stringify(result)))).catch(error => console.log(error)).finally(() => database.destroy())

// '*' para todos los campos 
// ('name', 'price') para especificos 