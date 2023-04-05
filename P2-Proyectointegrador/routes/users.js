var express = require('express');
const userscontrollers = require("../controllers/userscontrollers")
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/registro", userscontrollers.register)
router.get("/login", userscontrollers.login)
router.get ("/profile", userscontrollers.profile)
router.get ("/profile-edit", userscontrollers.profileEdit)

module.exports = router;

