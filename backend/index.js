import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const db = () =>
  mongoose
    .connect(
      "mongodb+srv://romuk358:tCO1ZREgYhtQaLkV@komora.xzpd6j0.mongodb.net/komora"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    });

app.use(
  cors({
    origin: "*",
  })
);

const Products = mongoose.model("products", {
  title: String,
  description: String,
  color: String,
  imgUrl: Array,
  price: Number,
  category: String,
  characteristics: {
    brand: { type: String, default: "" },
    model: { type: String, default: "" },
    memory: { type: String, default: "" },
    camera: { type: String, default: "" },
    display: { type: String, default: "" },
    battery: { type: String, default: "" },
  },
});

app.get("/categories", async (req, res) => {
  try {
    const uniqueCategories = await Products.distinct("category");

    res.json(uniqueCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const { category, search } = req.query;

    let query = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.title = { $regex: new RegExp(search, "i") };
    }

    const products = await Products.find(query);

    res.send({
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/productById", async (req, res) => {
  try {
    const { id } = req.query;

    const product = await Products.findById(id);

    res.send({
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/products/createRandom", async (req, res) => {
  try {
    const categoriesData = [
      {
        category: "smartphones",
        characteristics: {
          brand: "Brand",
          model: "Model",
          memory: "4GB",
          camera: "12MP",
          display: "6 inches",
          battery: "3000mAh",
        },
      },
      {
        category: "laptops",
        characteristics: {
          brand: "Brand",
          model: "Model",
          memory: "8GB RAM",
          display: "15.6 inches",
          battery: "5000mAh",
        },
      },
      {
        category: "headphones",
        characteristics: {
          brand: "Brand",
          model: "Model",
        },
      },
    ];

    for (const categoryData of categoriesData) {
      const { category, characteristics } = categoryData;
      for (let i = 0; i < 5; i++) {
        const newProduct = new Products({
          title: `${category.charAt(0).toUpperCase() + category.slice(1)} ${
            i + 1
          }`,
          description: `Description for ${
            category.charAt(0).toUpperCase() + category.slice(1)
          } ${i + 1}`,
          color: "Black",
          imgUrl: "https://via.placeholder.com/150",
          price: Math.floor(Math.random() * 1000) + 100,
          category,
          characteristics,
        });
        await newProduct.save();
      }
    }

    res.send("Mock data created successfully.");
  } catch (error) {
    res.status(500).send("Error creating mock data.");
  }
});

app.listen(5500, async () => {
  await db();
  console.log("Listening on port 5500");
});

imgUrl: "tetetetete";
imgUrl: ["tetetetete", "dghfghfd"];
