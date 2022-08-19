import options from "./options/mysql.js";
import knex from "knex";

const database = knex(options);

database('products').where('price', '15000').update({price: 23000}).then(() => console.log('precio actualizado')).catch(error => console.log(error)).finally(() => database.destroy())