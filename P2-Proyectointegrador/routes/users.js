var express = require('express');
const userscontrollers = require("../controllers/userscontrollers")
var router = express.Router();
/* GET users listing. */
router.get("/registro", userscontrollers.register)
router.post ("/registro", userscontrollers.create)

router.get("/login", userscontrollers.login)
router.post("/login", userscontrollers.chequeo)

router.get ("/profile/:id?", userscontrollers.profile)
router.post ("/profile", userscontrollers.chequeo)
// router.post("/delete/:id", userscontrollers.eliminar)

router.get ("/profile-edit", userscontrollers.profileEdit)
router.post ("/profile-edit", userscontrollers.chequeo)

module.exports = router;

