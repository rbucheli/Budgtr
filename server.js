// Dependencies 
const express = require('express');
const app = express();
const port = 3000;
// Database
const budget = require('./models/budget.js');

// Routes//
// Index Route
app.get('/budget', (req, res) => {
  res.render('index.ejs', { allBudget: budget });
});
// Still cannot display array on page
  
app.listen(3000);

//Show Route
app.get('/budget/:index', (req, res) => {
  res.render('show.ejs', {
    budget: budget[req.params.index]
  });
});

//New Route

// Create Route  