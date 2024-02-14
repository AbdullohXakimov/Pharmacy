const database = require("../config/database");

// this function show all medicine types when you use get method with localhost:PORT/MedicineType/
const getAllMedicineType = (req, res) => {
  database.query("SELECT * FROM MEDICINETYPE", (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Serverda Xatolik" });
    }
    res.status(200).json(result);
  });
};

//THIS FUNCTION RETURNS MEDICINETYPE WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const getMedicineTypeByID = (req, res) => {
  database.query(
    "SELECT * FROM MEDICINETYPE WHERE ID=?",
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

//THIS FUNCTION UPDATES MEDICINETYPE WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const updateMedicineTypeByID = (req, res) => {
  database.query(
    "UPDATE MEDICINETYPE SET NAME=? WHERE ID=?",
    [req.body.name, req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log(result[0]);
      res.status(200).json({ message: "MedicineType updated successfully" });
    }
  );
};

//THIS FUNCTION DELETES MEDICINETYPE WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const deleteMedicineTypeByID = (req, res) => {
  database.query(
    "DELETE FROM MEDICINETYPE WHERE ID=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log("Deleted");
      res.status(200).json({ message: "MedicineType deleted successfully" });
    }
  );
};

//THIS FUNCTION ADDS MEDICINETYPE
const addMedicineType = (req, res) => {
  database.query(
    "INSERT INTO MEDICINETYPE (NAME) VALUES (?)",
    [req.body.name],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log("added");
      res.status(200).json({ message: "MedicineType added successfully" });
    }
  );
};

module.exports = {
  getAllMedicineType,
  getMedicineTypeByID,
  updateMedicineTypeByID,
  deleteMedicineTypeByID,
  addMedicineType,
};
