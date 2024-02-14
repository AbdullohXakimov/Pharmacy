const express = require("express");
const {
  getAllMedicines,
  getMedicineByID,
  updateMedicineByID,
  deleteMedicineByID,
  addMedicine,
} = require("../controller/medicines");

const router = express.Router();

router.get("/", getAllMedicines);
router.get("/:id", getMedicineByID);
router.put("/:id", updateMedicineByID);
router.delete("/:id", deleteMedicineByID);
router.post("/", addMedicine);

module.exports = router;
