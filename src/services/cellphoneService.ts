import Cellphone from "../database/models/Cellphone";
import CellphoneOption from "../database/models/CellphoneOption";
import { ICellphoneStructure03, ICellphoneStructure03Item } from "../interfaces/ICellphone";

export async function getCellphones() {
    try {
        const cellphones = await Cellphone.findAll({
            include: [{ model: CellphoneOption, as: "options" }],
        });

        return cellphones;
    } catch (error) {
        throw new Error("Failed to fetch cellphones");
    }
}

export async function createCellphones(cellphonesData: ICellphoneStructure03) {
    try {
        for (const product of cellphonesData) {
            const { name, brand, model, data } = product;
            const cellphoneInstance = await Cellphone.create({ name, brand, model });

            for (const option of data) {
                await CellphoneOption.create({
                    CellphoneId: cellphoneInstance.id,
                    price: option.price,
                    color: option.color
                });
            }
        }
    } catch (error) {
        throw new Error("Failed to create cellphones");
    }
}

export async function updateCellphone(id: number, updatedData: ICellphoneStructure03Item) {
    try {
        await Cellphone.update(updatedData, { where: { id } });

        if (Array.isArray(updatedData.data)) {
            for (const option of updatedData.data) {
                if (option.id) {
                    await CellphoneOption.update(option, { where: { id: option.id } });
                    continue;
                }

                CellphoneOption.create({ ...option, CellphoneId: id });
            }
        }
    } catch (error) {
        throw new Error("Failed to update cellphone");
    }
}

export async function deleteCellphone(id: string) {
    try {
        await Cellphone.destroy({ where: { id } });
    } catch (error) {
        throw new Error("Failed to delete cellphone");
    }
}
