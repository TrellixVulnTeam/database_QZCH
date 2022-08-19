import options from "./options/mysql.js";
import knex from "knex";

// en callbacks y promises
const database = knex(options)
database.schema.createTable('products', table => {
    // asignar un primary
    table.primary('id');
    table.increments('id');
    table.string('name', 50);
    table.integer('price', 15);
    table.string('imageURL', 200);
}).then(() => console.log('tabla creada')).catch(err => console.log(err))
.finally(() => database.destroy());