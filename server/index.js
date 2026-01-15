const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let items = [
  {
    id: "1",
    name: "Laptop",
    description: "High performance laptop",
    price: 1200,
    image: "https://via.placeholder.com/300",
  },
  {
    id: "2",
    name: "Phone",
    description: "Latest smartphone",
    price: 800,
    image: "https://via.placeholder.com/300",
  },
];

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === req.params.id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(item);
});
app.post("/items", (req, res) => {
  const newItem = {
    id: Date.now().toString(),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
 