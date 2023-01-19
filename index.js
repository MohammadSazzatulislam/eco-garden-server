const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const Products = require("./fakeData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.json("eco garden api running");
});

app.get("/products", (req, res) => {
  res.send(Products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const result = Products.find(id);
  res.send(result);
});

app.listen(() => {
  console.log(`port is running at ${port}`);
});
