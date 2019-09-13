require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log("connected to database")
}).catch(error => console.log(error));

app.get("/api/houses", controller.getAllHouses);
app.get("/api/house/:id", controller.getHouse);
app.post("/api/houses", controller.addHouse);
app.delete("/api/house/:id", controller.deleteHouse);


app.listen(SERVER_PORT, () => console.log(`Server is listening at: ${SERVER_PORT}`))