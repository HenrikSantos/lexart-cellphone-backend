import express from "express";
import { loginController } from "../controllers/loginController";
import { loginMiddleware } from "../middlewares/loginMiddlewares";

const loginRouter = express.Router();

loginRouter.post("/", loginMiddleware, loginController);

export default loginRouter;
