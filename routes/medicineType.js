const express = require("express");
const {
  getAllMedicineType,
  getMedicineTypeByID,
  updateMedicineTypeByID,
  deleteMedicineTypeByID,
  addMedicineType,
} = require("../controller/medicineType");
const router = express.Router();

router.get("/", getAllMedicineType);
router.get("/:id", getMedicineTypeByID);
router.put("/:id", updateMedicineTypeByID);
router.delete("/:id", deleteMedicineTypeByID);
router.post("/", addMedicineType);

module.exports = router;
