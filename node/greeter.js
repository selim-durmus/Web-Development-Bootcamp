const fs = require("fs");

const folderName = process.argv[2] || "Project";

// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir("dogs", { recursive: true }, (err) => {
//   console.log("I come in the callback");
//   if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.css`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
} catch (err) {
  console.log(`error! msg:${err}`);
}
