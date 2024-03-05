import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import sequelize from "../dbConnection";

export interface CellphoneModel extends Model<InferAttributes<CellphoneModel>, InferCreationAttributes<CellphoneModel>> {
    id: CreationOptional<number>;
    name: string;
    brand: string;
    model: string;
}

const Cellphone = sequelize.define<CellphoneModel>("Cellphone", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

export default Cellphone;
