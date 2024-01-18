const figlet = require("figlet");
const colors = require("colors");

const userInputArray = process.argv.slice(2);
const userInput = userInputArray.join(" ");

figlet(userInput, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});
