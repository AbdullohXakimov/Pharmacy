const express = require("express");
const {
  getAllDistricts,
  getDistrictByID,
  updateDistrictByID,
  deleteDistrictByID,
  addDistrict,
} = require("../controller/district");

const router = express.Router();

router.get("/", getAllDistricts);
router.get("/:id", getDistrictByID);
router.put("/:id", updateDistrictByID);
router.delete("/:id", deleteDistrictByID);
router.post("/", addDistrict);

module.exports = router;
