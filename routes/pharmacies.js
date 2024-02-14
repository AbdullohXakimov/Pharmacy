const express = require("express");
const {
  getAllPharmacies,
  getPharmacyByID,
  updatePharmacyByID,
  deletepharmacyByID,
  addPharmacy,
} = require("../controller/pharmacies");

const router = express.Router();

router.get("/", getAllPharmacies);
router.get("/:id", getPharmacyByID);
router.put("/:id", updatePharmacyByID);
router.delete("/:id", deletepharmacyByID);
router.post("/", addPharmacy);

module.exports = router;
