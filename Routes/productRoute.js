const express = require("express");
const router = express.Router();
const productlogic = require("../BL/productLogic");

router.get("/", async (req, res) => {
  let products = await productlogic.getAllProducts()
  res.send(products);
});
router.get("/getOne/:userId", async (req, res) => {
  let productId = req.params.productId
  let products = await productlogic.getUser({_id:productId})
  res.send(products);
});

router.post("/newProduct", async (req, res) => {
  console.log("req.body", req.body);
  let newProd = await productlogic.newProduct(req.body);
  res.send(newProd);
});
router.put("/:productId", async (req, res) => {
  let productId = req.params.productId
  console.log('prod id',productId);
  let updatedProduct = await productlogic.updateProduct({_id:productId},req.body);
  res.send(updatedProduct);
});
router.delete("/:productId", async (req, res) => {
  let productId = req.params.productId
  console.log('proid',productId);
  console.log('prod id',productId);
  let updatedProduct = await productlogic.deleteProduct({_id:productId});
  res.send(updatedProduct);
});

module.exports = router;
