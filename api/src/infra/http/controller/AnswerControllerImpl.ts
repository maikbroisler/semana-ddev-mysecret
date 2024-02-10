import AnswerController from "@application/controller/AnswerController";
import { Request, Response } from "express";

export default class AnswerControllerImpl implements AnswerController {
  async create(request: Request, response: Response): Promise<void> {
    const { questionId, answer, userId } = request.body;
    const answerData = { questionId, answer, userId };
    //const newAnswer = await new CreateAnswer().execute(answerData)
    response.status(201).json(answerData);
  }
}