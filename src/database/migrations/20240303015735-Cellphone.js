"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Cellphones", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            brand: {
                type: Sequelize.STRING,
                allowNull: false
            },
            model: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable("Cellphones");
    }
};

// npx sequelize-cli db:migrate
