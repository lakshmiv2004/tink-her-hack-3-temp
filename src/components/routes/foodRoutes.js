const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

// POST: Add food details
router.post("/", async (req, res) => {
  const { foodType, quantity, expirationDate } = req.body;

  try {
    const newFood = new Food({ foodType, quantity, expirationDate });
    await newFood.save();
    res.status(201).json({ message: "Food details saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save food details" });
  }
});

// GET: Get all food details
router.get("/", async (req, res) => {
  try {
    const foodDetails = await Food.find();
    res.status(200).json(foodDetails);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch food details" });
  }
});

module.exports = router;
