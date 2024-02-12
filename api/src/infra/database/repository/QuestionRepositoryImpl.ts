import QuestionRepository from "@application/repository/QuestionRepository";
import QuestionEntity from "@domain/entity/QuestionEntity";
import QuestionDAO from "../dao/QuestionDAO";
import { AnswerModel, QuestionModel } from "@domain/model";
import AnswerEntity from "@domain/entity/AnswerEntity";

export default class QuestionRepositoryImpl implements QuestionRepository {
  constructor(private readonly questionDAO: QuestionDAO) { }

  private toEntity(question: QuestionModel): QuestionEntity {
    return new QuestionEntity(
      question.questionId,
      question.userId,
      question.question,
      question.createdAt,
      question.updatedAt
    )
  }

  private toModel(question: QuestionEntity): QuestionModel {
    return {
      questionId: question.questionId,
      question: question.question,
      userId: question.userId,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt
    }
  }

  async create(question: QuestionEntity): Promise<QuestionEntity> {
    await this.questionDAO.create(this.toModel(question));

    return question
  }

  async list(userId: string): Promise<QuestionEntity[]> {
    const questions = await this.questionDAO.list(userId)
    const listQuestions = questions.map((question) => this.toEntity(question));

    return listQuestions;
  }

  async delete(questionId: string): Promise<void> {
    await this.questionDAO.delete(questionId);
  }
}