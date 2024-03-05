import express from "express";

import { createCellphonesController, deleteCellphoneController, getAllCellphonesController, updateCellphoneController } from "../controllers/cellphoneController";
import { requestBodyStandardizer, updateMiddleware } from "../middlewares/cellphoneMiddlewares";
import { authenticateUser } from "../middlewares/authenticateUser";

const cellphoneRouter = express.Router();

cellphoneRouter.use(authenticateUser);

cellphoneRouter.get("/", getAllCellphonesController);
cellphoneRouter.post("/", requestBodyStandardizer, createCellphonesController);
cellphoneRouter.put("/:id", updateMiddleware, updateCellphoneController);
cellphoneRouter.delete("/:id", deleteCellphoneController);

export default cellphoneRouter;
