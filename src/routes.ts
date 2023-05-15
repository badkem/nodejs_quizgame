import { Express, Request, Response } from "express";
import { findAllQuestions } from "./api/controllers/questions_controller";

const Routes = (app: Express): void => {
  app.route("/").get((req: Request, res: Response) => {
    return res.json({ message: "Welcome to badkem server 🤟" });
  });

  app.route("/questions").get(findAllQuestions);
};

export default Routes;
