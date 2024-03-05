import express from "express";
import { createUserController, deleteUserController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/", createUserController);
userRouter.delete("/:id", deleteUserController);

export default userRouter;
