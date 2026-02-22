const express = require("express");
const router = express.Router();
const lectureController = require("../controllers/lectureController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Admin → Create Lecture
router.post(
  "/create",
  authMiddleware,
  roleMiddleware("admin"),
  lectureController.createLecture
);

// Admin → Get All Lectures
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  lectureController.getAllLectures
);

// Instructor → Get My Lectures (Logged In User)
router.get(
  "/my-lectures",
  authMiddleware,
  roleMiddleware("instructor"),
  lectureController.getMyLectures
);
// ============================
// DELETE LECTURE ROUTE (ADD ONLY)
// ============================
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  lectureController.deleteLecture
);
module.exports = router;