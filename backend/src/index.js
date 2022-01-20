const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./db/db");

const session = require("express-session");
const passport = require("./config/passport");

const port = 4000;

//database connection
db();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
