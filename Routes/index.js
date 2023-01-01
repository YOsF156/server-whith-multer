const express = require("express");
const mainRouter = express.Router();
let userPaass = "1234";
const productRoute = require("./productRoute");
const userRoute = require("./userRoute");

mainRouter.use("/product", productRoute);
mainRouter.use("/user", userRoute);

module.exports = mainRouter;
