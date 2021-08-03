import configJson from './src/infra/config/config.json';
import { app, Application } from './src/interfaces';

const nodeEnv: any = process.env.NODE_ENV;
const config: any = configJson;

const mapEnvironmentVariables = config[nodeEnv];

for (const key of Object.keys(mapEnvironmentVariables)) {
    process.env[key] = mapEnvironmentVariables[key] 
    console.log(`process.env.${key}: `,  mapEnvironmentVariables[key]);
}

import userRouter from "./src/modules/user/routers/userRouter";

const SERVER_PORT = Number(process.env.PORT) || 3000;

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

startApp(app, SERVER_PORT);