const express = require("express");
const {
  getAllRegions,
  getRegionByID,
  updateRegionByID,
  deleteRegionByID,
  addRegion,
} = require("../controller/Region");

console.log("Region");
const router = express.Router();

router.get("/", getAllRegions);
router.get("/:id", getRegionByID);
router.put("/:id", updateRegionByID);
router.delete("/:id", deleteRegionByID);
router.post("/", addRegion);

module.exports = router;
