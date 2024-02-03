const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("we got a new request");
  console.dir(req);
  //   res.send("hello, we got your reqeust, this is a response");
  res.send("<h1>This is an h1 tag text</h1>");
});

app.listen(3000, () => {
  console.log("started listening on port 3000");
});
