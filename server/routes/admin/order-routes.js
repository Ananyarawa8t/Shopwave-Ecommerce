const express = require("express");
const  isAdmin = require("../../controllers/auth/isAdmin")
const {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} = require("../../controllers/admin/order-controller");

const router = express.Router();

router.get("/get",isAdmin, getAllOrdersOfAllUsers);
router.get("/details/:id",isAdmin, getOrderDetailsForAdmin);
router.put("/update/:id",isAdmin, updateOrderStatus);

module.exports = router;
