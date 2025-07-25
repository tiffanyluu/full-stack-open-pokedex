require("dotenv").config();
const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/version", (req, res) => {
  res.send("version 1"); // change this string to ensure a new version deployed
});

app.listen(PORT, () => {
  //console.log(`server started on port ${PORT}`);
});
