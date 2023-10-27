const express = require("express");
const router = express.Router(); 

const { createUser } = require("../controllers/userController");
// User Routes
router.post("/createuser", createUser)


module.exports = router

// Handle Unhandled Routes
router.all("/**", (req, res) => {
    return res.status(400).send({status: true, message: "Your API URL endpoint is Wrong Please Check Endpoint"})
});