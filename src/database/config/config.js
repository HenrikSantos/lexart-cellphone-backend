require("dotenv").config();

const { POSTGRES_USER, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_DATABASE } = process.env;

module.exports = {
    development: {
        dialect: "sqlite",
        storage: "src/database/database.sqlite"
    },
    production: {
        username: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DATABASE,
        host: POSTGRES_HOST,
        dialect: "postgres",
        protocol: "postgres",
        dialectModule: require("pg"),
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
};
