// to create a server enter:
// node server.js  (in his directory)
// to abore ctrl + c

// Import the Express framework
const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Application is listening on port ${port}\n`);
});
