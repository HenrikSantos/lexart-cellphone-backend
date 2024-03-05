"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("CellphoneOptions", [  
            {
                CellphoneId: 1,
                price:  10000,
                color: "red"
            },
            {
                CellphoneId: 2,
                price:  10000,
                color: "blue"
            }
        ], {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("Cellphones", null, {});
    }
};

// npx sequelize-cli db:seed:all
