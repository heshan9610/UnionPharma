const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, { 
    useUnifiedTopology: true,
    
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
} )

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
})

//Customer.js  post acccess by heshan
const customerRouter = require("./routes/hesh_route/customers.js")
app.use("/customer", customerRouter);

//Order.js  get access by heshan
const orderRouter = require("./routes/hesh_route/orders.js")
app.use("/order", orderRouter);

