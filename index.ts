import { app, Application } from './src/interfaces';
import userRouter from "./src/routers/userRouter";

const port = 3000;

userRouter.dataBaseConnection();
userRouter.routes();

function startApp(app: Application, port: number) {
    try {
        app.listen(port, (): boolean => {
            console.log(`Connected successfully on port ${port}`);
            return true;
        });
    } catch (error) {
        console.error(`Error occured: ${error.message}`);
    }
}

startApp(app, port);