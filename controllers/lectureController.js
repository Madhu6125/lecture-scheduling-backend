const Lecture = require("../models/Lecture");

// ===============================
// CREATE LECTURE (Admin Only)
// ===============================
exports.createLecture = async (req, res) => {
  try {
    const { course, instructor, date } = req.body;

    if (!course || !instructor || !date) {
      return res.status(400).json({
        message: "All fields are required ❌",
      });
    }

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const existingLecture = await Lecture.findOne({
      instructor,
      date: selectedDate,
    });

    if (existingLecture) {
      return res.status(400).json({
        message: "Instructor already has lecture on this date ❌",
      });
    }

    const newLecture = await Lecture.create({
      course,
      instructor,
      date: selectedDate,
    });

    res.status(201).json({
      message: "Lecture assigned successfully ✅",
      data: newLecture,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===============================
// GET ALL LECTURES (Admin)
// ===============================
exports.getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find()
      .populate("course")
      .populate("instructor")
      .sort({ date: 1 });

    res.status(200).json({
      data: lectures,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===============================
// GET MY LECTURES (Instructor)
// ===============================
exports.getMyLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find({ instructor: req.user.id })
      .populate("course")
      .sort({ date: 1 });

    res.status(200).json({
      data: lectures,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// ============================
// DELETE LECTURE (ADD ONLY)
// ============================
exports.deleteLecture = async (req, res) => {
  try {
    const { id } = req.params;

    const lecture = await Lecture.findById(id);
    if (!lecture) {
      return res.status(404).json({
        message: "Lecture not found ❌",
      });
    }

    await Lecture.findByIdAndDelete(id);

    res.status(200).json({
      message: "Lecture deleted successfully ✅",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete lecture ❌",
    });
  }
};