const express = require("express");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");
require("dotenv").config();
require("./Models/db");

const app = express();


app.use(express.json()); 


const FRONTEND_URL = process.env.FRONTEND_URL || "*";
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);


app.get("/home", (req, res) => {
  res.send("hi I am root");
});


app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
