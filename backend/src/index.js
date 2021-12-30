const express = require("express");
const app = express();
const db = require("./db/db");

const port = 4000;

//database connection
db();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
