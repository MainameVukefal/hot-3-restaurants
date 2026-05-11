require("dotenv").config();

const express = require("express");
const connection = require("./db/connection");

const restaurantRoutes = require("./routes/restaurants");

const app = express();

//app.get("/", (req, res) => {
//  res.send("Hot 3 Restaurants API");
//});

app.use(express.static("public"));

app.use("/api/restaurants", restaurantRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
