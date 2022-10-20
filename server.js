const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
// require("dotenv").config({ path: "./config/.env" })


const app = require("./app");
const dbConnect = require("./db/dbConnect");



// database connection
dbConnect();



// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Tour Management App is running on port ${port}`);
});