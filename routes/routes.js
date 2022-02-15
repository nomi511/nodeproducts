const express = require("express")
const { get } = require("mongoose")
const router = express.Router()

const {getproducts, uploadproduct, homepage} = require("../controllers/products")


router.route("/").get(homepage).post(uploadproduct)
router.route("/products").get(getproducts)

module.exports = router