const Product = require('../models/productschema')

const homepage = async (req,res) => 
{
    res.status(200).send('<h1>HOME PAGE</h1>')
}

const getproducts = async (req,res) => {
    const { featured, rating, name, sort } = req.query
    const queryobj = {}
    if(featured)
    {
        queryobj.featured = featured === 'true' ? true:false
    }
    if(rating)
    {
        queryobj.rating = rating
    }
    if(name)
    {
        queryobj.name = name
    }
    

    const allproducts = await Product.find(queryobj).sort(sort)
    res.status(200).send(allproducts)
}

const uploadproduct = async (req, res) => {

    const pr = await Product.create(req.body)
    if(!pr)
    {
        res.status(401).send("error creating product")
    }

    res.status(200).json(pr)
}

module.exports = {getproducts, uploadproduct, homepage}