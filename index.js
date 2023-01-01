require("dotenv").config();
// const mainRouter = require("./config/mainRoutes")
const express = require("express")
const cors = require("cors");
const mainRouter = require('./Routes')
const app = express();
app.use(cors());
app.use(express.json());
let port = 5000;
//Body-parser
require("./DL/db").connect()
// require("./ROUTERS/userRouter")
app.use("/api", mainRouter)
app.listen(process.env.PORT || port, () =>
console.log(`Server is running at Port ${process.env.PORT || port}`));
