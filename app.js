const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 800;


// Routers
const userRouter = require("./router/userRouter");
const productRouter = require("./router/productsRouter");

// carrying frontend data to backend
app.use(express.json({
    urlencoded: true
}))

app.use(cookieParser());

// page gateway
app.use("/api/v1/user", userRouter);
app.use("/api/v1/products", productRouter);

// server 
const server = app.listen(port, () => {
    console.log("server is running at port : ", port);
})
