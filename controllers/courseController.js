const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      message: "Course created successfully ✅",
      data: course,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ data: courses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
