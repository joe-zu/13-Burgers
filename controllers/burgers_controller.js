const express = require('express');
const burger = require('../models/burger.js');

const router  = express.Router();


// router.get('/', function (req, res) {
//     res.render('index');
// });

router.get('/', (req, res) => {
    //retrieve and render list of all undevoured burgers
    burger.all((data) => {
        const dataObject = {
            burgers: data
        }
        // console.log("ALL BURGERS: " , dataObject)
        res.render("index", dataObject);
    });
});

router.post('/api/new', (req, res) => {
    //retrieve and render list of devoured burgers

    const name = req.body.name;
    burger.new(name, (result)  => {
        res.send(result);
        //console.dir("LOOKS LIKE MEATS BACK ON THE MENU")
    });
});

router.put('/api/devour/:id', (req, res) => {
    //req.body should pass in a number (burger id)
    const idNumber = req.params.id;
    burger.devour(idNumber, (result) => {
        res.send(result);
        // console.dir("NOM NOM NOM")
    });
});

module.exports = router;