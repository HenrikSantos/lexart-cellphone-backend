import { Request, Response } from "express";
import { createUser, deleteUser } from "../services/userService";

export async function createUserController(req: Request, res: Response) {
    try {
        const newUser = await createUser(req.body);

        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export async function deleteUserController(req: Request, res: Response) {
    try {
        await deleteUser(req.params.id);

        return res.status(204).json({ message: "DELETED" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}
