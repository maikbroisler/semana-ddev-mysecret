import AnswerEntity from "@domain/entity/AnswerEntity";

export default interface AnswerRepository {
  create(answer: AnswerEntity): Promise<AnswerEntity>;
  listAnswers(questionId: string): Promise<AnswerEntity[]>;
}