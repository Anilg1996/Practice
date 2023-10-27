const User = require("../models/userModel");

// Create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
