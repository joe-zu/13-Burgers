const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

const orm = {

  selectAll: (cb) => {
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (name, cb) => {
    const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
    connection.query(queryString, [name], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (idNumber, cb) => {
    const queryString = "UPDATE burgers SET devoured=true WHERE id = ?";
    connection.query(queryString, [idNumber], (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;