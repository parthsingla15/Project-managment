
const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().populate("assignedTo");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Accept a project
router.put("/:id/accept", async (req, res) => {
  const { candidateId } = req.body;

  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    project.assignedTo = candidateId;
    project.status = "accepted";
    await project.save();

    res.json({ message: "Project accepted", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
