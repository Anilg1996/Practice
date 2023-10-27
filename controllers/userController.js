const User = require("../models/userModel");

// Create a new user / signup
const createUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body

        if(!email || !name || !phone || !password) {
          return res.status(400).send({status: true, message: "All Credentials Mandatory"})
        }
        const checkDb = await User.findOne({email, phone})

        if(checkDb) {
          return res.status(409).send({status: true, message: "Email or Phone is Already Exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            phone,
            password : hashedPassword
        });

        const savedUser = await newUser.save();
        res.status(201).send({status: true, message: "User Registration Complete", data: savedUser});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUser }
