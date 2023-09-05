const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.static("./navbar-app"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}\n`);
});
