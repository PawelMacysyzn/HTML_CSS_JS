const express = require("express");
const app = express();
const port = 5000;

// ---------------  favicon.ico  ----------------
const mainRoutes = require("./favicon/mainRoutes.js");
app.use(mainRoutes);
// ---------------  favicon.ico  ----------------

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contakt Page");
});

// app.all("*", (req, res) => {
//   res.send("<h1>resource not found</h1>");
// });
app.all("*", (req, res) => {
  res.status(404).send(`
    <html>
      <head>
        <title>RESOURCE NOT FOUND</title>
      </head>
      <body>
        <h1>resource not found</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}\n`);
});

// app.get
// app.post
// app.put
// app.delete

// app.all
// app.use
// app.listen
