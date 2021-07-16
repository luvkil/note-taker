const fs = require("fs/promises");
const express = require("express");
const uuid = require("uuid");
const dbFilePath = __dirname + "/db/db.json";
// Sets up the Express App
const app = express();
const PORT = 8080;