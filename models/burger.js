const orm = require("../config/orm.js");

const burger = {
    // select all burgers
    all: (cb) => {
        orm.selectAll((result) => {
            cb(result);
        });
    },
    // add new burger - devour set to false by default
    new: (name, cb) => {
        orm.insertOne(name, (result) => {
            cb(result);
        });
    },
    // change devour state to true based on id
    devour: (idNumber, cb) => {
        orm.updateOne(idNumber, (result) => {
            cb(result);
        });
    }
}


module.exports = burger;