const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;

//! Public path
const publicStaticPath = path.join(__dirname, "../public");

const views_Path = path.join(__dirname, "../template/views");
const partials_Path = path.join(__dirname, "../template/partials");
// const templatePath = path.join(__dirname, "../template/views");
// const partialsPath = path.join(__dirname, "../template/partials");
app.use(express.static(publicStaticPath));

app.set("view engine", "hbs");
app.set("views", views_Path);
hbs.registerPartials(partials_Path);
// app.set("views", templatePath);
// hbs.registerPartials(partialsPath);

//! Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`Listening to port localhost.${port}`);
});
