const express = require ("express")
const productscontroller = require("../controllers/productscontroller")
const router= express.Router()

router.get("/productadd", productscontroller.productsadd)
router.post("/productadd", productscontroller.crear)
router.get("/detalle/:id", productscontroller.detalle)
router.get("/searchResults", productscontroller.searchresults)
router.get ("/edit.product", productscontroller.editproduct)
router.post("/deleteproduct/:id",productscontroller.delete )

module.exports = router;
