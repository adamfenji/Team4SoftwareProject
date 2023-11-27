const auth = require("../middleware/authorization");
const _ = require("lodash");
const express = require('express');
const router = express.Router();
const usersModel = require("../models/usersModel");
const dailyModel = require("../models/dailyModel");

//Check user data
router.get("/me", auth, async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).send("Access denied. User information missing.");
        }

        const userId = req.user._id;

        const user = await usersModel.findById(userId).select("-password");

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send(user);
    } catch (error) {
        console.error("Error retrieving user:", error);
        res.status(500).send('Internal Server Error');
    }
});

//Add or update the daily data
router.put('/:day', auth, async (req, res) => {

    console.log('Request body:', req.body);

    try{
        console.log('Request received for updating daily data.');
        const userId = req.user._id;
        console.log(userId);

        const user = await usersModel.findById(userId);
        console.log("user found, _id:" + userId);
        if(!user) return res.status(404).send('User not found');

        const day = user.daily.find((d) => d.date === req.params.day);

        if(day){
            await usersModel.findByIdAndUpdate(userId,{
                $set:{
                    'daily.$[elem].diet': req.body.diet,
                    'daily.$[elem].sleep': req.body.sleep,
                    'daily.$[elem].exercise': req.body.exercise,
                }},
                { arrayFilters: [{ 'elem.date': req.params.day }] }
            );
            console.log('Daily data updated successfully.');
            res.status(200).send('Daily data updated successfully');
        }
        else{
    
            user.daily.push({
                date: req.params.day,
                diet: req.body.diet,
                sleep: req.body.sleep,
                exercise: req.body.exercise
            });
    
            await user.save();
            res.status(200).send('Daily data added successfully');
        }

    }
    catch(error){
        console.error('Error updating daily data:', error);
        res.status(500).send('Internal Server Error');
    }

});

module.exports = router;