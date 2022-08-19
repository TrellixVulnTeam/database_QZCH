import options from "./options/mysql.js";
import knex from "knex";

const database = knex(options);

database('products').where('price', '=', '23000').delete().then(() => console.log('productos borrados')).catch(error => console.log(error)).finally(() => database.destroy()) 