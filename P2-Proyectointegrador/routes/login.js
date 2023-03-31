const express = require ("express")
const logincontrollers = require("../controllers/logincontrollers")
const router= express.Router()

router.get("/login", logincontrollers.register)
module.exports= router

