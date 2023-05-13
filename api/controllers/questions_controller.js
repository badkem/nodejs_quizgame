import QuizModel from "../models/quiz";

export const findAllQuestions = async (req, res) => {
  const { page, limit } = req.query;
  try {
    const questions = await QuizModel.findAll();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong 😝" });
  }
};
