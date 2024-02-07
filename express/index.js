const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got a new request");
//   //   res.send("hello, we got your reqeust, this is a response");
//   res.send("<h1>This is an h1 tag text</h1>");
// });

app.get("/", (req, res) => {
  console.log("home request");
  res.send("this is the home page!");
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1> Viewing Post Id: ${postId}! </h1>`);
  console.log(`${subreddit} requested!`);
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1> Browsing the ${subreddit} subreddit! </h1>`);
  console.log(`${subreddit} requested!`);
});

app.get("/cats", (req, res) => {
  console.log("cat request");
  res.send("meow!");
});

app.get("/dogs", (req, res) => {
  console.log("dog request");
  res.send("woof!");
});

app.post("/cats", (req, res) => {
  console.log("post request!");
  res.send("post request to /cats");
});

app.get("/search", (req, res) => {
  const { q, color } = req.query;
  if (!q) {
    res.send("nothing found if nothing searched");
  } else res.send(`<h1> search results for: ${q} and ${color}</h1>`);
});

app.get("*", (req, res) => {
  console.log("404");
  res.send(" I don't know that path!");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("hi!");
});

app.listen(3000, () => {
  console.log("started listening on port 3000");
});
