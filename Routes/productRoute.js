const express = require("express");
const router = express.Router();
const productlogic = require("../BL/productLogic")


router.get("/", async (req, res) => {
    const AllProducts = await productlogic.getAllProducts()
    res.send(AllProducts)
})




module.exports = router