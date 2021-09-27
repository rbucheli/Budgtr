// Dependencies
const express = require("express");
const app = express();
const port = 3000;
// Database
const budget = require("./models/budget.js");

// Middleware
app.use(express.urlencoded({ extended: false }));

// Routes//
// Index Route
app.get("/budget", (req, res) => {
  res.render("index.ejs", { allBudget: budget });
});

// Create Route
app.post("/budget/new", (req, res) => {
  budget.push(req.body);
  res.redirect("/budget");
})

//New Route
app.get("/budget/new", (req, res) => {
  res.render("new.ejs", {});
});

//Show Route
app.get("/budget/:index", (req, res) => {
  res.render("show.ejs", {
    budget: budget[req.params.index],
  });
});

app.listen(3000);