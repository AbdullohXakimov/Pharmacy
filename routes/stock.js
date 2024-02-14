const express = require("express");
const {
  getAllStocks,
  getStockByID,
  updateStockByID,
  deleteStockByID,
  addStock,
} = require("../controller/stock");

const router = express.Router();

router.get("/", getAllStocks);
router.get("/:id", getStockByID);
router.put("/:id", updateStockByID);
router.delete("/:id", deleteStockByID);
router.post("/", addStock);

module.exports = router;

