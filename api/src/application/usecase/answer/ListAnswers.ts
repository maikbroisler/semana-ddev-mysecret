import AnswerRepository from "@application/repository/AnswerRepository";
import AnswerEntity from "@domain/entity/AnswerEntity";
import Registry from "@infra/di/Registry";

export default class ListAnswers {
  private readonly answerRepository: AnswerRepository;

  constructor() {
    const registry = Registry.getInstance()
    this.answerRepository = registry.resolve<AnswerRepository>('AnswerRepository')
  }
  
  async execute(questionId: string): Promise<OutputListAnswers[]> {
    const answers = await this.answerRepository.listAnswers(questionId);

    const outputAnswers = answers.map((answer) => ({
      answerId: answer.answerId,
      userId: answer.userId,
      answer: answer.answer,
      createdAt: answer.createdAt
    }))

    return outputAnswers;
  }
}

type OutputListAnswers = {
  answerId: string;
  userId: string | null;
  answer: string;
  createdAt: Date;
}