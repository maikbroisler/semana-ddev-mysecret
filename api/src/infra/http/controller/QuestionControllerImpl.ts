import QuestionController from "@application/controller/QuestionController";
import { Request, Response } from "express";

export default class QuestionControllerImpl implements QuestionController {
  async create(request: Request, response: Response): Promise<void>{
    const { title, description, userId } = request.body;
    const questionData = { title, description, userId };
    //const newQuestion = await new CreateQuestion().execute(questionData);
    response.status(201).json(questionData);
  }

  async list(request: Request, response: Response): Promise<void>{
    const { userId } = request.params;
    //const questions = await new ListQuestions().execute(userId)
    response.status(200).json({ userId })
  }

  async delete(request: Request, response: Response): Promise<void>{
    const { questionId } = request.params;
    //const questions = await new DeleteQuestion().execute(questionId)
    response.status(204).send();
  }


}