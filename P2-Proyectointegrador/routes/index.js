var express = require('express');
const indexcontrollers = require("../controllers/indexcontrollers")
var router = express.Router();

/* GET home page. */
router.get('/', indexcontrollers.index);

module.exports = router;

