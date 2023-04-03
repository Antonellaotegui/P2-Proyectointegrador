var express = require('express');
const userscontrollers = require("../controllers/userscontrollers")
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/registro", userscontrollers.register)
router.get("/login", userscontrollers.register)
module.exports = router;
