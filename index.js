require("dotenv").config();
// const mainRouter = require("./config/mainRoutes")
const express = require("express")
const cors = require("cors");
const app = express();





app.use(cors());
app.use(express.json());
let port = 5000;

require("./DL/db").connect()

app.use("/api/product", require("./Routes/productRoute"))


// require("./ROUTERS/userRouter")

app.listen(process.env.PORT || port, () =>
    console.log(`Server is running at Port ${process.env.PORT || port}`));
