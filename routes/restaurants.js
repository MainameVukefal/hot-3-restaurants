const express = require("express");
const router = express.Router();

const connection = require("../db/connection");

router.get("/", (req, res) => {
  const city = req.query.city;

  const query = `
    SELECT *
    FROM restaurants
    WHERE city = ?
    ORDER BY rating DESC
    LIMIT 3
  `;

  connection.query(query, [city], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Database query failed"
      });
    }

    res.json(results);
  });
});

module.exports = router;
