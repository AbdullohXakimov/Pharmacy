const express = require("express");

const router = express.Router();

console.log("Index");

const medicineTypeRouter = require("./medicineType");
const regions = require("./region");
const district = require("./district");
const medicines = require("./medicine");
const pharmacies = require("./pharmacies");
const stocks = require("./stock");

router.use("/medicineType",medicineTypeRouter);
router.use("/region", regions);
router.use("/district", district);
router.use("/medicines", medicines);
router.use("/pharmacies",pharmacies);
router.use("/stock", stocks);

module.exports = router;
