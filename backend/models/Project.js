const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate", default: null },
});

module.exports = mongoose.model("Project", ProjectSchema);
