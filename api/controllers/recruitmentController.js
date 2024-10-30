const Recruitment = require("../models/recruitment");

// Create a recruitment event
const createRecruitment = async (req, res) => {
  const recruitment = new Recruitment({
    id: req.body.id,
    title: req.body.title,
    game: req.body.game,
    role: req.body.role,
    description: req.body.description,
    tryoutDate: req.body.tryoutDate,
  });
  try {
    const newRecruitment = await recruitment.save();
    res.status(201).json({ newRecruitment });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a recruitment event by id
const updateRecruitment = async (req, res) => {
  try {
    const recruitment = await Recruitment.findById(req.params.id);
    if (recruitment == null) {
      return res
        .status(404)
        .json({ message: "Recruitment could not be found" });
    }
    if (req.body.title != null) {
      recruitment.title = req.body.title;
    }
    if (req.body.game != null) {
      recruitment.game = req.body.game;
    }
    if (req.body.role != null) {
      recruitment.role = req.body.role;
    }
    if (req.body.description != null) {
      recruitment.description = req.body.description;
    }
    if (req.body.tryoutDate != null) {
      recruitment.tryoutDate = req.body.tryoutDate;
    }
    const updatedRecruitment = await recruitment.save();
    res.status(200).json(updatedRecruitment);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Get all recruitment events
const getRecruitments = async (req, res) => {
  try {
    const recruitments = await Recruitment.find();
    res.status(200).json(recruitments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a recruitment event by id
const deleteRecruitment = async (req, res) => {
  try {
    const recruitment = await Recruitment.findById(req.params.id);
    if (recruitment == null) {
      return res
        .status(404)
        .json({ message: "Recruitment could not be found" });
    }
    await recruitment.remove();
    res.status(200).json({ message: "Recruitment deleted" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Delete all recruitment events
const deleteAllRecruitments = async (req, res) => {
  try {
    await Recruitment.deleteMany();
    res.status(200).json({ message: "All recruitments deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createRecruitment,
  updateRecruitment,
  getRecruitments,
  deleteRecruitment,
  deleteAllRecruitments,
};
