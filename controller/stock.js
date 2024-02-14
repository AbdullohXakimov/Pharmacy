const database = require("../config/database");

// this function show all stocks when you use get method with localhost:PORT/stocks/
const getAllStocks = (req, res) => {
  console.log(1);
  database.query("SELECT * FROM Stock", (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Serverda Xatolik" });
    }
    res.status(200).json(result);
  });
};

//THIS FUNCTION RETURNS STOCK WHEN REQUEST'S ID IS EQUAL TO Stock'S ID
const getStockByID = (req, res) => {
  console.log(1);
  database.query(
    "SELECT * FROM STOCK WHERE ID=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log(result);
      res.status(200).json(result[0]);
    }
  );
};

//THIS FUNCTION UPDATES Stock WHEN REQUEST'S ID IS EQUAL TO Stock'S ID
const updateStockByID = (req, res) => {
  const { pharmacy_id, medicine_id, quantity } = req.body;

  database.query(
    "SELECT * FROM PHARMACIES WHERE ID=?",
    [pharmacy_id],
    (err, resultOfPharmacies) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      if (resultOfPharmacies.length === 0) {
        console.log("Bo'sh list");
        return res.status(404).json({ message: "Bunday Pharmacies yo'q" });
      }
      database.query(
        "SELECT * FROM MEDICINES WHERE ID=?",
        [medicine_id],
        (err, resultOfMedicine) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ message: "Serverda Xatolik" });
          }
          if (resultOfMedicine.length === 0) {
            console.log("Bo'sh list");
            return res.status(404).json({ message: "Bunday Medicine yo'q" });
          }
          database.query(
            "UPDATE STOCK SET pharmacy_id=?, medicine_id=?, quantity=? WHERE ID=?",
            [pharmacy_id, medicine_id, quantity, req.params.id],
            (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).json({ message: "Serverda Xatolik" });
              }
              console.log(result[0]);
              res.status(200).json({ message: "Stock updated successfully" });
            }
          );
        }
      );
    }
  );
};

//THIS FUNCTION DELETES Stock WHEN REQUEST'S ID IS EQUAL TO STOCK'S ID
const deleteStockByID = (req, res) => {
  database.query(
    "DELETE FROM STOCK WHERE ID=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      console.log("Deleted");
      res.status(200).json({ message: "STOCK deleted successfully" });
    }
  );
};

//THIS FUNCTION ADDS STOCK
const addStock = (req, res) => {
  console.log(1);
  const { pharmacy_id, medicine_id, quantity } = req.body;

  database.query(
    "SELECT * FROM PHARMACIES WHERE ID=?",
    [pharmacy_id],
    (err, resultOfPharmacies) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Serverda Xatolik" });
      }
      if (resultOfPharmacies.length === 0) {
        console.log("Bo'sh list");
        return res.status(404).json({ message: "Bunday Pharmacies yo'q" });
      }
      database.query(
        "SELECT * FROM MEDICINES WHERE ID=?",
        [medicine_id],
        (err, resultOfMedicine) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ message: "Serverda Xatolik" });
          }
          if (resultOfMedicine.length === 0) {
            console.log("Bo'sh list");
            return res.status(404).json({ message: "Bunday Medicine yo'q" });
          }
          database.query(
            "INSERT INTO STOCK (pharmacy_id, medicine_id, quantity) VALUES (?,?,?)",
            [pharmacy_id, medicine_id, quantity],
            (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).json({ message: "Serverda Xatolik" });
              }
              console.log(result[0]);
              res.status(200).json({ message: "Stock ADDED successfully" });
            }
          );
        }
      );
    }
  );
};

module.exports = {
  getAllStocks,
  getStockByID,
  updateStockByID,
  deleteStockByID,
  addStock,
};
