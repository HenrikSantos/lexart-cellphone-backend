import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import sequelize from "../dbConnection";
import Cellphone from "./Cellphone";

interface CellphoneOptionModel extends Model<InferAttributes<CellphoneOptionModel>, InferCreationAttributes<CellphoneOptionModel>> {
    id: CreationOptional<number>;
    price: number;
    color: string;
    CellphoneId: ForeignKey<number>
}

const CellphoneOption = sequelize.define<CellphoneOptionModel>("CellphoneOption", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CellphoneId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{ timestamps: false });

Cellphone.hasMany(CellphoneOption, { as: "options" });
CellphoneOption.belongsTo(Cellphone, { foreignKey: "CellphoneId" as "options", onDelete: "CASCADE", onUpdate: "CASCADE" });

export default CellphoneOption;
