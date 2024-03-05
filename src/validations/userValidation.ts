import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const schema = Joi.object({
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
});

export const userValidation = async(req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) return res.status(400).json({ message: "Bad request 400" });

    return next();
};
