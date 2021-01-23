const express = require('express');
const burger = require('../models/burger.js');

const router  = express.Router();

router.get('/api/all', (req, res) => {
    //retrieve and render list of all undevoured burgers
    burger.all();
    res.send("all undevoured")
    
})

router.get('/api/devoured', (req, res) => {
    //retrieve and render list of devoured burgers
    res.send("all devoured")
})

router.post('/api/devour', (req, res) => {
    console.log(req.body);
    res.send("burger id recieved")
    //req.body should pass in a number (burger id)
})

module.exports = router;