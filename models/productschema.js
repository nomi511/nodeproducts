const mongoose = require("mongoose")



const productschema =  mongoose.Schema({
    name:{
        type:String,
        required: [true, "name is required"],
        trim: true
    },
    price:{
        type:Number,
        required: [true, "price is required"]
    },
    featured:
    {
        type: Boolean,
        default: false,
    },
    rating:
    {
        type: Number,
        default: 4.5
    },
    createdAt:
    {
        type: Date,
        default: Date.now()
    },
    company:
    {
        type:String,
        enum: {
            values:['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }

})


module.exports = mongoose.model("Product", productschema)