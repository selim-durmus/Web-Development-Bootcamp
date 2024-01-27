const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const args = process.argv;

if (args.length < 3) {
  console.log("Please provide an input argument.".red);
} else {
  // Access the user-provided argument
  const userInput = args[2];
  console.log("User input:", userInput);

  // Use the result of the franc function
  const languageCode = franc(userInput);

  if (languageCode === "und") {
    console.log("Language not identified.".red);
  } else {
    const languageName = langs.where("3", languageCode);

    if (languageName) {
      console.log("Detected language:", languageName.name.green);
    } else {
      console.log("Language not identified.".red);
    }
  }
}
