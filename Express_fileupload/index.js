const express = require("express")
const fileUpload = require("express-fileupload")
const app = express()

port = 5001
file_limit_size_bytes = 500_000

var cors = require("cors") //  strict-origin-when-cross-origin
app.use(cors()) //  strict-origin-when-cross-origin

app.use(
  fileUpload({
    limits: { fieldSize: file_limit_size_bytes },
  })
) // This is where all the magic happens

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
  if (req.files) {
    var file = req.files.file
    var uploadPath = __dirname + "/uploads/" + file.name

    console.log(`File name: ${file.name}\nsize: ${file.size/1000}  KB`)

    if (file.size <= file_limit_size_bytes) {
      // Check that the file does not exceed the size limit
      // Save file
      file.mv(uploadPath, function (err) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send("File uploaded")
        }
      })
    } else {
      res.status(400).send(`File size exceeds the limit (${file_limit_size_bytes/1000} KB)`)
    }
  }
})

// Listen on the port
app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})
