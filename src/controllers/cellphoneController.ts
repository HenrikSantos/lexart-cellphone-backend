import { Request, Response } from "express";
import { createCellphones, deleteCellphone, getCellphones, updateCellphone } from "../services/cellphoneService";

export async function getAllCellphonesController(req: Request, res: Response) {
    try {
        const cellphones = await getCellphones();
        res.json(cellphones);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export async function createCellphonesController(req: Request, res: Response) {
    try {
        await createCellphones(req.body);

        return res.status(201).json({ message: "CREATED" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export async function updateCellphoneController(req: Request, res: Response) {
    try {
        await updateCellphone(+req.params.id, req.body);

        return res.status(204).json({ message: "UPDATED" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export async function deleteCellphoneController(req: Request, res: Response) {
    try {
        await deleteCellphone(req.params.id);

        return res.status(204).json({ message: "DELETED" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}
