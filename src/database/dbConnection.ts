require("dotenv").config();

import { Sequelize } from "sequelize";
const dbConfig = require("./config/config");

const { NODE_ENV } = process.env;

const sequelize = new Sequelize(dbConfig[NODE_ENV || "development"]);

sequelize.authenticate().then(() => {
    console.log("Connection OK.");
}).catch(err => {
    console.error("Error:", err);
});

export default sequelize;
