import express, { Application, Request, Response } from "express";

const app: Application = express();
const apiRouter = express.Router()
const v1Router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter)
apiRouter.use('/v1', v1Router);

export {
    express,
    app,
    apiRouter,
    v1Router,
    Application,
    Request,
    Response
}