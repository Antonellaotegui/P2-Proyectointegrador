var express = require('express');
const indexcontrollers = require("../controllers/indexcontrollers")
var router = express.Router();

/* GET home page. */
router.get('/', indexcontrollers.index);
router.get('/', indexcontrollers.logout);
module.exports = router;

