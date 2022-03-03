const express = require("express");
const router = express.Router();


router.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM `contact_db`";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

router.post("/api/post", (req, res) => {
  const { name, email, contact } = req.body;
  const sqlInsert =
    "INSERT INTO `contact_db` (name, email, contact) VALUES (?, ?, ?)";
  db.query(sqlInsert, [name, email, contact], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

router.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM `contact_db` WHERE id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

router.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM `contact_db` WHERE id = ?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

router.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  const sqlUpdate =
    "UPDATE `contact_db` SET name = ?, email = ?, contact = ? WHERE id = ?";
  db.query(sqlUpdate, [name, email, contact, id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});