const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  const { quantity, meat } = req.body;
  res.send(`ok here your order: ${quantity} ${meat} tacos`);
});

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});
