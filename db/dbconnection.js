const mongoose = require("mongoose")

const connect = (dburi) => {

    mongoose.connect(dburi).then(console.log("connected to mongodb"))

}


module.exports = connect