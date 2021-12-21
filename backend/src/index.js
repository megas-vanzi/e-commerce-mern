const express = require("express");
const app = express();

const port = 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
