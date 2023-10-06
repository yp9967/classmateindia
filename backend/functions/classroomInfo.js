const mongoose = require("mongoose");

const classroomInfoSchema = new mongoose.Schema(
  {
    classroomID: String,
    capacity: Number,
    requirement: Number,
    remainingreq: Number,
    subjects: [String],
    languageRequirement: [String],
    location: String,
  },
  {
    collection: "classroom",
  }
);
mongoose.model("classroom", classroomInfoSchema);
