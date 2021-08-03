import UserController from '../controllers/userController';
import { v1Router } from '../../../interfaces';
import {Database, auth } from '../../../infra';


class userRouter {
  private database: Database;
  
  constructor() {
    this.database = new Database();
    this.routes();
  }

 async dataBaseConnection() {
    await this.database.connect();
  } 

  routes() {
    const endpoint: string = "/users";
    v1Router.use(auth.validate);
    
    v1Router.post(endpoint, UserController.create);
    v1Router.get(endpoint, UserController.get);
    v1Router.put(endpoint, UserController.update);
    v1Router.delete(endpoint, UserController.delete);
  }

}

export default new userRouter();