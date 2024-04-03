const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "John", "John", "James"];
  res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("not_found", { subreddit });
  }
});
function isEven(num) {
  return num % 2 === 0;
}
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  const even = isEven(num);

  res.render("random", { num: num, even: even });
  res.render();
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
