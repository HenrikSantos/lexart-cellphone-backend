require("dotenv").config();

import express, { Router } from "express";
import helmet from "helmet";
import cors from "cors";

import cellphoneRouter from "./routes/cellphoneRouter";
import userRouter from "./routes/userRouter";
import loginRouter from "./routes/loginRouter";

const app = express();

const route = Router();

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use("/api/cellphone", cellphoneRouter);
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);

app.use(route);

export default app;
