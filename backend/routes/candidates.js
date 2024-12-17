const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");

// Create a candidate
router.post("/", async (req, res) => {
  const { name, email } = req.body;

  try {
    const newCandidate = new Candidate({ name, email });
    await newCandidate.save();
    res.status(201).json(newCandidate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
