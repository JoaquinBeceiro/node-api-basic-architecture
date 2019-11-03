const express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app),
  bodyParser = require("body-parser"),
  helmet = require("helmet");

// CONFIGS
require("dotenv").config();

// Get variables from .env
const { ENVIROMENT, PORT } = process.env;

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// SMALL SECURITY
app.use(helmet());

/*** MIDDLEWARES ****/
const appMiddleware = require("./middleware/app");

// Log request on develop
ENVIROMENT === "dev" && app.use("/", appMiddleware.log);

// Basic auth to all api calls
app.use("/", appMiddleware.auth);

// User JWT
app.use("/user", appMiddleware.jwtCheck);

/*** ./MIDDLEWARES ****/

/*** ROUTES ****/
const guest = require("./routes/guest"); // Imports routes for guest

app.use("/", guest);
/*** ./ROUTES ****/

/*** SERVER ****/
app.set("port", PORT || 3000);

app.listen(app.get("port"), function() {
  console.log(`Node server running on http://localhost:${app.get("port")}`);
});
/*** ./SERVER ****/
