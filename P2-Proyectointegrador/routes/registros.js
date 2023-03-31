const express = require ("express")
const registrocontrollers = require("../controllers/registroscontrollers")
const router= express.Router()

router.get("/registro", registrocontrollers.register)
module.exports= router