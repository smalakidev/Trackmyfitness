//All variables are up here
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4200;

const db = require("./models");
const app = express();