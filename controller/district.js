const database = require("../config/database");

// this function show all districts when you use get method with localhost:PORT/districts/
const getAllDistricts = (req, res) => {
  database.query("SELECT * FROM DISTRICT", (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Serverda Xatolik" });
    }
    res.status(200).json(result);
  });
};

//THIS FUNCTION RETURNS DISTRICT WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const getDistrictByID = (req, res) => {
  database.query(
    "SELECT * FROM DISTRICT WHERE ID=?",
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

//THIS FUNCTION UPDATES DITRICT WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const updateDistrictByID = (req, res) => {
  database.query(
    "UPDATE DISTRICT SET NAME=?, REGION_ID=? WHERE ID=?",
    [req.body.name, req.body.region_id, req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log(result[0]);
      res.status(200).json({ message: "DISRICT updated successfully" });
    }
  );
};

//THIS FUNCTION DELETES DISTRICT WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const deleteDistrictByID = (req, res) => {
  database.query(
    "DELETE FROM DISTRICT WHERE ID=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log("Deleted");
      res.status(200).json({ message: "District deleted successfully" });
    }
  );
};

//THIS FUNCTION ADDS District
const addDistrict = (req, res) => {
  const { name, region_id } = req.body;
  console.log(req.body);
  database.query(
    "SELECT * FROM REGION WHERE ID=?",
    [region_id],
    (err, resultOfRegionId) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Serverda xatolik" });
      }
      if (resultOfRegionId.length === 0) {
        console.log("Bo'sh list");
        return res.status(404).json({ message: "Bunday region yo'q" });
      }
      database.query(
        "INSERT INTO DISTRICT (NAME, region_id) VALUES (?, ?)",
        [name, region_id],
        (error, result) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: "Serverda Xatolik" });
          }
          console.log("added");
          res.status(200).json({ message: "DISTRICT added successfully" });
        }
      );
    }
  );
};

module.exports = {
  getAllDistricts,
  getDistrictByID,
  updateDistrictByID,
  deleteDistrictByID,
  addDistrict,
};
