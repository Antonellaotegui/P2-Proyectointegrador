const express = require ("express")
const productscontroller = require("../controllers/productscontroller")
const router= express.Router()

router.get("/productadd", productscontroller.productsadd)
router.post("/productadd", productscontroller.crear)
router.get("/detalle/:id", productscontroller.detalle)
router.get("/searchResults", productscontroller.searchresults)
router.get ("/edit_product", productscontroller.editproduct)
router.post ("/edit_product", productscontroller.update)
router.post("/deleteproduct/:id",productscontroller.delete )
router.post('/detalle/:id', productscontroller.createcomment)


module.exports = router;
