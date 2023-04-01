const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;

//! Public path
const publicStaticPath = path.join(__dirname, "../public");
app.use(express.static(publicStaticPath));

const views_Path = path.join(__dirname, "../template/views");
const partials_Path = path.join(__dirname, "../template/partials");
console.log("Hey");
// console.log(partials_Path);
// console.log(views_Path);
app.set("views", views_Path);
app.set("view engine", "hbs");
// hbs.registerPartial(partials_Path);

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
  res.render("404error");
});

app.listen(port, () => {
  console.log(`Listening to port localhost.${port}`);
});
