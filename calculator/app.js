const express = require("express");
const app = express();

// setup ejs
app.set("view engine", "ejs");

app.use(express.urlencoded());

// render calculator.ejs
app.get("/", (req, res) => {
  res.render("calculator");
});

let result = 0;

app.post("/set", (req, res) => {
  // gets a and b from calculator.ejs
  let a = Number(req.body.a); 
  let b = Number(req.body.b);

  if (req.body.operator === "+") {
    result = a + b;
  }

  if (req.body.operator === "-") {
    result = a - b;
  }

  if (req.body.operator === "*") {
    result = a * b;
  }

  if (req.body.operator === "/") {
    result = a / b;
  }

  res.redirect("/result");
});

app.get("/result", (req, res) => {
  res.render("result", { result: result });
})

app.listen(3000);



