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
// router.post('/insertUser', async (req, res) => {
//     const user = new usersModel({
//         name: req.body.name,
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     })

//     try {
//         const insertUser = await user.save()
//         res.status(201).json(insertUser)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

router.post('/register', async (req, res) => {
    usersModel.create(req.body)
    .then( (users) => res.status(201).json(users))
    .catch( (error) => res.status(400).json({ message: error.message }));
})

router.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    usersModel.findOne({email: email})
    .then( (user) => {
        if(user){
            if(user.password === password){
                res.json("Success");
            }
            else{
                res.json("Password incorrect");
            }
        }
        else{
            res.json("No user found.");
        }
    })
});


module.exports = router;