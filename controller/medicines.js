const database = require("../config/database");

// this function show all Medicines when you use get method with localhost:PORT/medicines/
const getAllMedicines = (req, res) => {
  database.query("SELECT * FROM MEDICINES", (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Serverda Xatolik" });
    }
    res.status(200).json(result);
  });
};

//THIS FUNCTION RETURNS medicine WHEN REQUEST'S ID IS EQUAL TO MEDICINE'S ID
const getMedicineByID = (req, res) => {
  database.query(
    "SELECT * FROM MEDICINES WHERE ID=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      res.status(200).json(result[0]);
    }
  );
};

//THIS FUNCTION UPDATES MEDICINE WHEN REQUEST'S ID IS EQUAL TO MEDICINE'S ID
const updateMedicineByID = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  database.query(
    "UPDATE MEDICINES SET NAME=?, MANUFACTURER=?, medicine_type_id=?, price=?, expiry_date=?, INFO=? WHERE ID=?",
    [
      name,
      manufacturer,
      medicine_type_id,
      price,
      expiry_date,
      info,
      req.params.id,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log(result[0]);
      res.status(200).json({ message: "Medicine updated successfully" });
    }
  );
};

//THIS FUNCTION DELETES MEDICINE WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const deleteMedicineByID = (req, res) => {
  database.query(
    "DELETE FROM MEDICINES WHERE ID=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log("Deleted");
      res.status(200).json({ message: "MEDICINE deleted successfully" });
    }
  );
};

//THIS FUNCTION ADDS MEDICINE
const addMedicine = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;

  database.query(
    "SELECT ID FROM MEDICINETYPE WHERE ID=?",
    [medicine_type_id],
    (err, resultOfMedicineType) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Serverda xatolik" });
      }
      if (resultOfMedicineType.length === 0) {
        console.log("Bo'sh list");
        return res.status(404).json({ message: "Bunday MedicineType yo'q" });
      }
      database.query(
        "INSERT INTO MEDICINES (name, manufacturer, medicine_type_id, price, expiry_date, info) VALUES (?,?,?,?,?,?)",
        [name, manufacturer, medicine_type_id, price, expiry_date, info],
        (error, result) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: "Serverda Xatolik" });
          }
          console.log("added");
          res.status(200).json({ message: "Medicine added successfully" });
        }
      );
    }
  );
};

module.exports = {
  getAllMedicines,
  getMedicineByID,
  updateMedicineByID,
  deleteMedicineByID,
  addMedicine,
};
