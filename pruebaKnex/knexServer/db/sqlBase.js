import knex from "knex";

// configuracion para sqlBase
// let db = knex({
//     client: 'mysql',
//     connection: {
//         host: '127.0.0.1',
//         user: 'root',
//         password: '',
//         database: 'midb'
//     }
// })
// try{
//    let exists = await db.schema.hasTable('products');
// //    console.log(exists); 
// if (exists) {
//     await db('products').del();
// } else {
//     await db.schema.createTable('products', table => {
//         table.primary('id')
//         table.increments('id')
//         table.string('name', 50).nullable(false)
//         table.integer('price', 15),
//         table.string('imageURL', 200)
//     })
// }
// } catch (error) {
//      console.log(error);
// }

// configuracion para sqlLite3
// const mysqloptions = {
//     client: "mysql",
//     connection: {
//         host: '127.0.0.1',
//         user: 'root',
//         password: '',
//         database: 'midb'
//     }
// }
const sqlLiteOptions = {
        client: "sqlite3",
        connection: {
            filename: './sqliteDatabase.sqlite'
        },
        useNullAsDefault: true
    }
let db = knex(sqlLiteOptions)
try{
   let exists = await db.schema.hasTable('products');
//    console.log(exists); 
if (exists) {
    await db('products').del();
} else {
    await db.schema.createTable('products', table => {
        table.primary('id')
        table.increments('id')
        table.string('name', 50).nullable(false)
        table.integer('price', 15),
        table.string('imageURL', 200)
    })
}
} catch (error) {
     console.log(error);
}

export default db