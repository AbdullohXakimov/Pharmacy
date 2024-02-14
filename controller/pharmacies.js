const database = require("../config/database");

// this function show all Pharmacies when you use get method with localhost:PORT/pharmacies/
const getAllPharmacies = (req, res) => {
  database.query("SELECT * FROM PHARMACIES", (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Serverda Xatolik" });
    }
    res.status(200).json(result);
  });
};

//THIS FUNCTION RETURNS PHARMACIES WHEN REQUEST'S ID IS EQUAL TO PHARMACIESE'S ID
const getPharmacyByID = (req, res) => {
  database.query(
    "SELECT * FROM PHARMACIES WHERE ID=?",
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

//THIS FUNCTION UPDATES PHARMACY WHEN REQUEST'S ID IS EQUAL TO PHARMACY'S ID
const updatePharmacyByID = (req, res) => {
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;

  database.query(
    "SELECT * FROM REGION WHERE ID=?",
    [region_id],
    (err, resultOfRegion) => {
      if (err) {
        console.log(err);
        return res.status(404).json({ message: "Error in Server" });
      }
      if (resultOfRegion.length === 0) {
        console.log("Bo'sh list");
        return res
          .status(404)
          .json({ message: "There is no like this region" });
      }
      database.query(
        "SELECT * FROM DISTRICT WHERE ID=?",
        [district_id],
        (err, resultOfDistrict) => {
          if (err) {
            console.log(err);
            return res.status(404).json({ message: "Error in Server" });
          }
          if (resultOfDistrict.length === 0) {
            console.log("Bo'sh list");
            return res
              .status(404)
              .json({ message: "There is no like this district" });
          }
          database.query(
            "UPDATE PHARMACIES SET name=?, address=?, location=?, phone=?, email=?, region_id=?, district_id=? WHERE ID=?",
            [
              name,
              address,
              location,
              phone,
              email,
              region_id,
              district_id,
              req.params.id,
            ],
            (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).json({ message: "Serverda Xatolik" });
              }
              console.log(result[0]);
              res
                .status(200)
                .json({ message: "Pharmacies updated successfully" });
            }
          );
        }
      );
    }
  );
};

//THIS FUNCTION DELETES PHARMACY WHEN REQUEST'S ID IS EQUAL TO MEDICINETYPE'S ID
const deletepharmacyByID = (req, res) => {
  database.query(
    "DELETE FROM PHARMACIES WHERE ID=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log("Deleted");
      res.status(200).json({ message: "Pharmacy deleted successfully" });
    }
  );
};

//THIS FUNCTION ADDS Pharmacy
const addPharmacy = (req, res) => {
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;

  database.query(
    "SELECT * FROM REGION WHERE ID=?",
    [region_id],
    (err, resultOfRegion) => {
      if (err) {
        console.log(err);
        return res.status(404).json({ message: "Error in Server" });
      }
      if (resultOfRegion.length === 0) {
        console.log("Bo'sh list");
        return res
          .status(404)
          .json({ message: "There is no like this region" });
      }
      database.query(
        "SELECT * FROM DISTRICT WHERE ID=?",
        [district_id],
        (err, resultOfDistrict) => {
          if (err) {
            console.log(err);
            return res.status(404).json({ message: "Error in Server" });
          }
          if (resultOfDistrict.length === 0) {
            console.log("Bo'sh list");
            return res
              .status(404)
              .json({ message: "There is no like this district" });
          }
          database.query(
            "INSERT INTO PHARMACIES ( name, address, location, phone, email, region_id, district_id) VALUES (?,?,?,?,?,?,?)",
            [
              name,
              address,
              location,
              phone,
              email,
              region_id,
              district_id,
              req.params.id,
            ],
            (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).json({ message: "Serverda Xatolik" });
              }
              console.log(result[0]);
              res
                .status(200)
                .json({ message: "Pharmacies added successfully" });
            }
          );
        }
      );
    }
  );
};

module.exports = {
  getAllPharmacies,
  getPharmacyByID,
  updatePharmacyByID,
  deletepharmacyByID,
  addPharmacy,
};
