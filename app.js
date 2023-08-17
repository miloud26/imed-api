const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./model/Product");
const Pixel = require("./model/Pixel");
const Sheet = require("./model/Sheet");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({ name: "miloud" });
});

mongoose.connect("mongodb+srv://miloud26:1234@cluster0.egjxa3x.mongodb.net/");

app.get("/products", async (req, res) => {
  const products = await Product.find();

  return res.status(200).json({ products });
});
app.post("/products", async (req, res) => {
  const { body } = req;

  await Product.create({ ...body });
  return res.status(200).json({ ...body });
});

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;

  const product = await Product.findOneAndDelete({ _id: id });
  return res.status(200).json({ product });
});

app.get("/pixel", async (req, res) => {
  const pixel = await Pixel.find();

  return res.status(200).json({ pixel });
});
app.patch("/pixel/:id", async (req, res) => {
  const { id } = req.params;
  const { pixel } = req.body;
  const newPixel = await Pixel.findOneAndUpdate(
    { _id: id },
    { pixel },
    { new: true }
  );
  res.status(200).json({ newPixel });
});

app.get("/sheet", async (req, res) => {
  const sheet = await Sheet.find();

  return res.status(200).json({ sheet });
});
app.patch("/sheet/:id", async (req, res) => {
  const { id } = req.params;
  const { sheet } = req.body;
  const newSheet = await Sheet.findOneAndUpdate(
    { _id: id },
    { sheet },
    { new: true }
  );
  res.status(200).json({ newSheet });
});

app.listen(5000);
