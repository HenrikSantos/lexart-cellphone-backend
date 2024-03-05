require("dotenv").config();

import { Request, Response, NextFunction } from "express";
import User from "../database/models/User";

const jwt = require("jsonwebtoken");

export const authenticateUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization");
        const secret = process.env.SECRET || "secret";

        if (!token) return res.status(401).json({ message: "Token not found" });

        const { email } = jwt.verify(token, secret);

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
    } catch (err) {
        return res.status(401).json({ message: "Expired or invalid token" });
    }

    next();
};
