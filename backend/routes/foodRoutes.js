const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

// POST: Add food details
// router.post("/", async (req, res) => {
//   const { foodType, quantity, expirationDate } = req.body;

//   try {
//     const newFood = new Food({ foodType, quantity, expirationDate });
//     await newFood.save();
//     res.status(201).json({ message: "Food details saved successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save food details" });
//   }
// });
router.post("/", async (req, res) => {
  const { foodType, quantity, expirationDate } = req.body;
  console.log("Request body:", req.body);

  try {
    const newFood = new Food({ foodType, quantity, expirationDate });
    await newFood.save();
    console.log("Food saved:", newFood);
    res.status(201).json({ message: "Food details saved successfully!" });
  } catch (error) {
    console.error("Error while saving food:", error);
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    console.log("del id: ", id)
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ error: "Food not found" });
    }
    res.status(200).json({ message: "Food details deleted successfully!" });
  } catch (error) {
    console.log("error deleteio")
    res.status(500).json({ error: "Failed to delete food details" });
  }
});

module.exports = router;
