require("dotenv").config()
require("express-async-errors")

const express = require("express")
const dbconnect = require("./db/dbconnection")

const notfound = require("./middlewares/notfound")
const errorhandler = require("./middlewares/errorhandler")
const routes = require("./routes/routes.js")

const app = express()

// ------- for accesing data in req.body
const bodyParser = require('body-parser')
app.use(bodyParser.json());
// -------

app.use(express.json())


//app.get("/", (req,res)=> {res.status(200).send("<h1>HOME PAGE</h1><a href='/api/v1/products'>products</a>")})

app.use("/api/v1/", routes)

app.use(notfound)
app.use(errorhandler)

const port  = process.env.PORT || 4001

const start = async() => {
    try {

        await dbconnect(process.env.MONGODB)
        app.listen(port, ()=> console.log(`Server listening on port: ${port}`))
        
    } catch (error) {
        console.log(error)
    }
}

start()
