const express = require("express");
const  isAdmin = require("../../controllers/auth/isAdmin")
const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../../controllers/admin/products-controller");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add",isAdmin, addProduct);
router.put("/edit/:id", isAdmin,editProduct);
router.delete("/delete/:id",isAdmin, deleteProduct);
router.get("/get", isAdmin,fetchAllProducts);

module.exports = router;
