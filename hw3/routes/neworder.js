var express = require('express');
var router = express.Router();
var dbms_promise = require('./dbms_promise.js');

//Hung-Nghi Vu
//Get post object from scriptstuff.js
router.post('/', function(req, res, next) {
    //Data to get (number of topping, topping, notes)
    const {quantity, topping, notes} = req.body; 
    const months = 'Aug';
    const day = 13;
    const id = Math.random(1000);
    console.log("Hello");


    //Query statement to call dbquery on
    const insertQuery = `INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES (${id}, '${months}', ${day}, ${quantity}, '${topping}', '${notes}')`;
    dbms_promise.dbquery(insertQuery)
        .then(result => {
            //Messages to state successfull insert and error
            console.log("Insert result:", result);
        })
        .catch(error => {
            console.error("Failed to insert into the database:", error);
        });
});

module.exports = router;