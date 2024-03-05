import express from "express";

import { createCellphonesController, deleteCellphoneController, getAllCellphonesController, updateCellphoneController } from "../controllers/cellphoneController";
import { requestBodyStandardizer, updateMiddleware } from "../middlewares/cellphoneMiddlewares";
import { authenticateUser } from "../middlewares/authenticateUser";

const cellphoneRouter = express.Router();

cellphoneRouter.get("/", getAllCellphonesController);
cellphoneRouter.post("/", authenticateUser, requestBodyStandardizer, createCellphonesController);
cellphoneRouter.put("/:id", authenticateUser, updateMiddleware, updateCellphoneController);
cellphoneRouter.delete("/:id", authenticateUser, deleteCellphoneController);

export default cellphoneRouter;
