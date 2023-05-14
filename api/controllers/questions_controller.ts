import { Request, Response } from "express";
import { Quiz } from "../models/quiz";
import { FindOptions } from "sequelize";

const findAllQuestions = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;
    const options: FindOptions = { order: [["ID", "DESC"]] };

    if (limit) {
      options.limit = Number(limit);
    }

    const questions = await Quiz.findAll(options);

    console.log("Get all questions successfully 🎉", questions.length);

    return res.json({
      success: true,
      message: "Get all questions successfully 🎉",
      data: questions,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong 😝" });
  }
};

const findQuestionById = async (req: Request, res: Response) => {};

export { findAllQuestions, findQuestionById };
