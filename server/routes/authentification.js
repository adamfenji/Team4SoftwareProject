const auth = require("../middleware/authorization");
const _ = require("lodash");
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

router.get('/me', auth, async (req, res) => {
    const user = await usersModel.findById(req.user._id).select('-password');
})

router.post('/register', async (req, res) => {

    let user = await usersModel.findOne({ email: req.body.email });
    if (user) { return res.status(400).send("User already registered.") }

    user = new usersModel(_.pick(req.body, ["name", "email", "password"]));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ["_id", "name", "email"]));

});

router.post("/login", async (req, res)=>{

    let user = await usersModel.findOne({email: req.body.email});
    if(!user){ return res.status(400).send("Invalid email or password.");}

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){ return res.status(400).send("Invalid email or password.");}

    const token = user.generateAuthToken();
    res.send(token);

});

//When logging out, delete the token on the front-end.


module.exports = router;