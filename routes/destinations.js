const express = require("express");
const Destination = require("../models/Destination");

const router = express.Router();

// Create a new destination
router.post("/", async (req, res) => {
  try {
    const { name, description, image, price } = req.body;
    const newDestination = new Destination({ name, description, image, price });
    await newDestination.save();
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all destinations
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a destination by ID
router.get("/:id", async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ error: "Destination not found" });
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a destination
router.put("/:id", async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedDestination) return res.status(404).json({ error: "Destination not found" });
    res.json(updatedDestination);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a destination
router.delete("/:id", async (req, res) => {
  try {
    const deletedDestination = await Destination.findByIdAndDelete(req.params.id);
    if (!deletedDestination) return res.status(404).json({ error: "Destination not found" });
    res.json({ message: "Destination deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;