import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import HttpServer from './HttpServer';
import UserControllerImpl from './controller/UserControllerImpl';
import RouterFactory from './controller/RouterFactory';


export default class ExpressAdapter implements HttpServer {
  readonly app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(cors())
    this.app.use(express.json())

    const routerFactory = new RouterFactory();


    const userControler = new UserControllerImpl()

    this.app.use('/api', routerFactory.register());
    this.app.use('/api', (request, response) => {
      response.json({ message: 'Hello World!' })
    })
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server is running at port ${port}`)
    })
  }
}