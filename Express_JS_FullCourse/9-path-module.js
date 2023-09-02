const path = require("path");

console.log(path.sep);
//  \

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
// \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base);
// test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
// C:\Users\pawel.macaszyn\Documents\My_Repos\HTML_CSS_JS\Express_JS_FullCourse\content\subfolder\test.txt

const absolute_another = path.resolve(__dirname, "content/subfolder/test.txt");
console.log(absolute_another);
// C:\Users\pawel.macaszyn\Documents\My_Repos\HTML_CSS_JS\Express_JS_FullCourse\content\subfolder\test.txt