import { Request, Response, NextFunction } from "express";
import { ICellphoneStructure01, ICellphoneStructure02, ICellphoneStructure03 } from "../interfaces/ICellphone";
import Cellphone from "../database/models/Cellphone";

export const requestBodyStandardizer = (req: Request, res: Response, next: NextFunction) => { 
    
    if ("details" in req.body) {
        const { name, price, details } = req.body as ICellphoneStructure02;
        req.body = [{ name, brand: details.brand, model: details.model, data: [{ price, color: details.color }] }];

        return next();
    } 
    
    if (Array.isArray(req.body) || "data" in req.body) {
        return next();
    }

    const { name, brand, model, color, price } = req.body as ICellphoneStructure01;

    const formatedBody: ICellphoneStructure03 = [{ name, brand, model, data: [{ price, color }] }];

    req.body = formatedBody;

    return next();
};

export const updateMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const cellphoneFounded = await Cellphone.findByPk(req.params.id);
    
    if (!cellphoneFounded) return res.status(404).send("Cellphone not found");

    return next();
};
