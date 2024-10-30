const express = require("express");
const router = express.Router();

const {
  deleteAllRecruitments,
  createRecruitment,
  getRecruitments,
  getRecruitmentByID,
  updateRecruitment,
  deleteRecruitment,
} = require("../controllers/recruitmentController");

router.post("/", createRecruitment); // Create a new recruitment event
router.get("/", getRecruitments); // Get all recruitment events
router.get("/postID/:postID", getRecruitmentByID);
// router.get("/game/:game", getRecruitmentsByGame);
router.patch("/postID/:postID", updateRecruitment); // Update a recruitment event by ID
router.delete("/postID/:postID", deleteRecruitment); // Delete a recruitment event by ID
router.delete("/", deleteAllRecruitments);

module.exports = router;
