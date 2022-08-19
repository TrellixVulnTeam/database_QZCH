import db from "./db/sqlBase.js";
import express from "express";

const app = express()
const server = app.listen(8080, () => console.log("Now listening on 8080"));

let products = [
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
        price: 25000,
        imageURL: "https://www.tustecnologiastuc.com/wp-content/uploads/D_NQ_NP_999292-MLA45668561685_042021-O.jpg"
    }
]

app.get('/products', async(req, res) => {
    try {
        let products = await db('products').select('*')
        res.send(products)
    }catch(error){
        res.status(500).send('Cannot get products')
    }
})

app.get('/insert', async(req, res) => {
    try{
        let result = await db('products').insert(products)
        res.send(result)
    }catch(error){
        res.status(500).send('Cannot insert products')
    }
})