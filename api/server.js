//import dependencies--const XXXX = require("") same as import XXXX from ""
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const data = require("../data");
const { deer } = require("../data");

//middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

//make requests

//gets all data for all seasons
server.get("/seasons", (req, res) => {
  res.json(data);
});

//gets all deer zones
server.get("/seasons/deer", (req, res) => {
  res.json(data.deer);
});

module.exports = server;
