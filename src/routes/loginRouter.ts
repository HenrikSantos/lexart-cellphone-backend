import express from "express";
import { loginController } from "../controllers/loginController";
import { userValidation } from "../validations/userValidation";

const loginRouter = express.Router();

loginRouter.post("/", userValidation, loginController);

export default loginRouter;
