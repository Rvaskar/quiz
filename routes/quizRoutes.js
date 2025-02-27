const express = require("express");
const { addQuestion, getQuestions } = require("../controllers/quizController");
const router = express.Router();

router.post("/add", addQuestion);
router.get("/", getQuestions);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Quiz = require("../models/Quiz");

// // Get All Questions
// router.get("/", async (req, res) => {
//   const questions = await Quiz.find();
//   res.json(questions);
// });

// // Add Question
// router.post("/add", async (req, res) => {
//   const { question, optionA, optionB, optionC, optionD, correctAnswer } = req.body;
//   const newQuestion = new Quiz({ question, optionA, optionB, optionC, optionD, correctAnswer });
//   await newQuestion.save();
//   res.json(newQuestion);
// });

// // Delete Question
// router.delete("/:id", async (req, res) => {
//   await Quiz.findByIdAndDelete(req.params.id);
//   res.json({ message: "Question deleted" });
// });

// module.exports = router;
