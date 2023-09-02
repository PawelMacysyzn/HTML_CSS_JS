const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    const finalResult = `Here is the result: ${first}, ${second}`;
    const options = { flag: 'a' };   

    writeFile("./content/result-sync.txt", finalResult, options, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("File has been written successfully.");
    });
  });
});
