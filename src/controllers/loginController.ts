import { Request, Response } from "express";
import { login } from "../services/loginService";

export async function loginController(req: Request, res: Response) {
    try {
        const token = await login(req.body);

        if (!token) return res.status(404).json({ message: "Not found 404" });

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}
