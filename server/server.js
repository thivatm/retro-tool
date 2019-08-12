const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./config/server.config");

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database Connection established!");
});
