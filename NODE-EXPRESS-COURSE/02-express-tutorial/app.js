const express = require("express");
const app = express();
const port = 5000;



// ---------------  favicon.ico  ----------------
const mainRoutes = require("./favicon/mainRoutes");
app.use(mainRoutes);
// ---------------  favicon.ico  ----------------


app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.all("/about", (req, res) => {
  res.send("About");
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})


app.listen(port, () => {
  console.log(`Server is listening on port ${port}\n`);
});


// app.param