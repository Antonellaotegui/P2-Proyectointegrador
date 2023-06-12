var express = require('express');
const userscontrollers = require("../controllers/userscontrollers")
var router = express.Router();
/* GET users listing. */
router.get("/registro", userscontrollers.register)
router.post ("/registro", userscontrollers.register.create)

router.get("/login", userscontrollers.login)
router.post("/login", userscontrollers.chequeo)

router.get ("/profile/:id", userscontrollers.profile)
router.post("/delete/:id", userscontrollers.eliminar)

router.get ("/profile-edit/:id", userscontrollers.profileEdit)
router.post ("/profile-edit/:id", userscontrollers.chequeo)

module.exports = router;

