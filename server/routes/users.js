//Still working on this.

const express = require('express');
const router = express.Router();

const usersModel = require("../models/usersModel");

//Getting all
router.get('/', async (req, res) => {

    try {
        const users = await usersModel.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Getting One
router.get('/:id', (req, res) => {
})

//Creating One
router.post('/insertUser', async (req, res) => {
    const user = new usersModel({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const insertUser = await user.save()
        res.status(201).json(insertUser)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;