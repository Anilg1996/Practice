const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
dbConnect();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
})


// START THE PROJECT 

// 1 => npm init -y
// 2 => npm i express mongodb mongoose bcryptjs jsonwebtoken
// 3 => touch index.js
// 4 => create File Structure (MVC Model View Controller)
// 5 => install nodemon using npm i nodemon --save-dev


