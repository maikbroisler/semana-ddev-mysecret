import { Router } from 'express';
import UserControllerImpl from './UserControllerImpl';
import AnswerControllerImpl from './AnswerControllerImpl';
import QuestionControllerImpl from './QuestionControllerImpl';

export default class RouterFactory {
  private userController: UserControllerImpl;
  private questionController: QuestionControllerImpl;
  private answerController: AnswerControllerImpl;

  constructor() {
    this.userController = new UserControllerImpl();
    this.questionController = new QuestionControllerImpl();
    this.answerController = new AnswerControllerImpl();
  }

  register(): Router {
    const router = Router();

    // QuestionController
    router.post('/question', this.questionController.create);
    router.post('/question/:questionId/answers', this.answerController.create);
    router.get('/question/:questionId/answers', this.answerController.list);
    router.delete('/question/:questionId', this.questionController.delete);

    // UserController
    router.post('/user', this.userController.create);
    router.get('/user/:userId/questions', this.questionController.list);

    return router;
  }
}