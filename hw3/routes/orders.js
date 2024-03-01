var express = require('express');
var router = express.Router();
var dbms_promise = require('../routes/dbms_promise.js');

//Hung-Nghi Vu

//Data to collect using dmbs_promise function. Gets each month
var data = [];
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Jan' GROUP BY TOPPING").then( val => data[0] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Feb' GROUP BY TOPPING").then( val => data[1] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Mar' GROUP BY TOPPING").then( val => data[2] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Apr' GROUP BY TOPPING").then( val => data[3] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'May' GROUP BY TOPPING").then( val => data[4] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Jun' GROUP BY TOPPING").then( val => data[5] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Jul' GROUP BY TOPPING").then( val => data[6] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Aug' GROUP BY TOPPING").then( val => data[7] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Sep' GROUP BY TOPPING").then( val => data[8] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Oct' GROUP BY TOPPING").then( val => data[9] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Nov' GROUP BY TOPPING").then( val => data[10] = (JSON.parse(JSON.stringify(val))) );
dbms_promise.dbquery("SELECT TOPPING, COUNT(*) AS order_count FROM ORDERS WHERE MONTH = 'Dec' GROUP BY TOPPING").then( val => data[11] = (JSON.parse(JSON.stringify(val))) );

/* POST json object */
router.post('/', function(req, res, next) {
	res.json(data);
});
/* GET json object */
router.get('/', function(req, res, next) {
	res.json(data);
});

module.exports = router;