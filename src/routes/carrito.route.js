"use strict"

var express = require("express");
var cartController = require("../controllers/carrito.controller");
var api = express.Router();
var mdAuth = require("../middlewares/authenticated");

api.put("/addToCart/:id",mdAuth.ensureUser,cartController.addToCart);

module.exports = api;