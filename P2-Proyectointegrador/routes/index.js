var express = require('express');
const indexcontrollers = require("../controllers/indexcontrollers")
const router = express.Router();

/* GET home page. */
router.get('/', indexcontrollers.index);
router.post('/', indexcontrollers.logout);

console.log(router.get)
module.exports = router;

