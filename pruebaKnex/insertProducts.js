import options from "./options/mysql.js";
import knex from "knex";

const database = knex(options);

const products = [
    {
        name: "Computadora portatil",
        price: 250000,
        imageURL: "https://cdn.pocket-lint.com/r/s/320x/assets/images/148988-laptops-news-buyer-s-guide-best-student-laptop-image23-vpl09ogimx.jpg?v1"
    },
    {
        name: "Auriculares Sony",
        price: 15000,
        imageURL: "https://images.fravega.com/f500/c9b6d37dd88dff04757320959b4c1dcf.jpg"
    },
    {
        name: "Celular Samgung",
        price: 15000,
        imageURL: "https://www.tustecnologiastuc.com/wp-content/uploads/D_NQ_NP_999292-MLA45668561685_042021-O.jpg"
    }
]

database('products').insert(products).then(result => console.log(result)).catch(error => console.log(error)).finally(() => database.destroy())

// le puedo pasar un json, lo insertaria como objeto
// database('products').jsonInsert()