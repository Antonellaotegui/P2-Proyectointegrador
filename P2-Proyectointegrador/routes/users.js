var express = require('express');
const userscontrollers = require("../controllers/userscontrollers")
var router = express.Router();
/* GET users listing. */
router.get("/registro", userscontrollers.register)
router.post ("/registro", userscontrollers.register.create)
router.get("/login", userscontrollers.login)
router.post("/login", userscontrollers.chequeo)
router.get ("/profile/:id", userscontrollers.profile)
router.get ("/profile-edit/:id", userscontrollers.profileEdit)

module.exports = router;

