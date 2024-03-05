"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("CellphoneOptions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            CellphoneId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Cellphones",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            color: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable("CellphoneOptions");
    }
};

// npx sequelize-cli db:migrate
