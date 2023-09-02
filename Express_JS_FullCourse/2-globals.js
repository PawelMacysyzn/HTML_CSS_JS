console.log(__dirname); // - path to current directory
//  C:\Users\pawel.macaszyn\Documents\My_Repos\HTML_CSS_JS\Express_JS_FullCourse
console.log(__filename); // - file name
//  C:\Users\pawel.macaszyn\Documents\My_Repos\HTML_CSS_JS\Express_JS_FullCourse\app.js

const time_set = 1000;
setInterval(() => {
  console.log(`Hello ~ ${time_set} sec`);
}, time_set);

// Hello ~ 1000 sec
// Hello ~ 1000 sec
// Hello ~ 1000 sec
// Hello ~ 1000 sec

