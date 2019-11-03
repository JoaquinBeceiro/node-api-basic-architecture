const express = require("express");
const router = express.Router();
const {
  validation,
  username,
  password,
  name
} = require("../helpers/validators");

// CONTROLLER
const guest_controller = require("../controllers/guest");

// CREATE ROUTES ON ROUTER

// App login
router.post(
  "/login", 
  [username, password], 
  validation, 
  guest_controller.login
);

// App register
router.post(
  "/register",
  [name, username, password],
  validation,
  guest_controller.register
);

module.exports = router;
