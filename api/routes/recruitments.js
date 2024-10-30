const express = require("express");

const {
  getRecruitmentByID,
  getRecruitmentByTitle,
  getRecruitmentsByGame,
  deleteRecruitmentByTitle,
  deleteAllRecruitments,
  createRecruitment,
  getRecruitments,
  updateRecruitment,
  deleteRecruitment,
} = require("../controllers/recruitmentController");

const router = express.Router();
router.post("/", createRecruitment); // Create a new recruitment event
router.get("/", getRecruitments); // Get all recruitment events
router.get("/:id", getRecruitmentByID);
router.get("/title/:title", getRecruitmentByTitle);
router.get("/game/:game", getRecruitmentsByGame);
router.patch("/:id", updateRecruitment); // Update a recruitment event by ID
router.delete("/title/:title", deleteRecruitmentByTitle); // Delete a recruitment event by title
router.delete("/:id", deleteRecruitment); // Delete a recruitment event by ID
router.delete("/", deleteAllRecruitments);

module.exports = router;
