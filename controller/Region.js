const database = require("../config/database");

// this function show all Regions when you use get method with localhost:PORT/regions/
const getAllRegions = (req, res) => {
  database.query("SELECT * FROM Region", (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Serverda Xatolik" });
    }
    res.status(200).json(result);
  });
};

//THIS FUNCTION RETURNS REGION WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const getRegionByID = (req, res) => {
  database.query(
    "SELECT * FROM REGION WHERE ID=?",
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

//THIS FUNCTION UPDATES Region WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const updateRegionByID = (req, res) => {
  database.query(
    "UPDATE REGION SET NAME=? WHERE ID=?",
    [req.body.name, req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log(result[0]);
      res.status(200).json({ message: "Region updated successfully" });
    }
  );
};

//THIS FUNCTION DELETES REGION WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const deleteRegionByID = (req, res) => {
  database.query(
    "DELETE FROM REGION WHERE ID=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log("Deleted");
      res.status(200).json({ message: "Region deleted successfully" });
    }
  );
};

//THIS FUNCTION ADDS REGION
const addRegion = (req, res) => {
    console.log(req.body);
  database.query(
    "INSERT INTO REGION (NAME) VALUES (?)",
    [req.body.name],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log("added");
      res.status(200).json({ message: "Region added successfully" });
    }
  );
};

module.exports = {
  getAllRegions,
  getRegionByID,
  updateRegionByID,
  deleteRegionByID,
  addRegion,
};
