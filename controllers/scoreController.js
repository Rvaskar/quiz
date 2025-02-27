const Score = require("../models/Score");

exports.submitScore = async (req, res) => {
  try {
    const newScore = new Score(req.body);
    await newScore.save();
    res.json({ message: "Score submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Score.find().sort({ score: -1, timeTaken: 1 });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
