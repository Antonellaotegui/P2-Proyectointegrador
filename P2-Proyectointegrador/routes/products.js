const express = require ("express")
const productscontroller = require("../controllers/productscontroller")
const router= express.Router()

router.get("/productadd", productscontroller.productsadd)
router.post("/crear", productscontroller.crear)
router.get("/detalle/:id", productscontroller.detalle)
router.get("/searchResults", productscontroller.searchresults)

router.get ("/edit_product/:id", productscontroller.editproduct)
router.post ("/edit_product", productscontroller.update)

router.post("/delete", productscontroller.delete)
router.post("/addcomment/:id", productscontroller.createcomment)



module.exports = router;
