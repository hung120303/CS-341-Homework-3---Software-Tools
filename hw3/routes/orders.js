var express = require('express');
var router = express.Router();
//json data array
const data = [ {topping: "cherry", quantity: '2'},
{topping: "plain", quantity: '3'},
{topping: "chocolate", quantity: '4'}];
/* POST json object */
router.post('/', function(req, res, next) {
	res.json(data);
});
/* GET json object */
router.get('/', function(req, res, next) {
	res.json(data);
});

module.exports = router;