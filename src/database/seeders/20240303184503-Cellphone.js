"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("Cellphones", [  
            {
                name: "Xiaomi Redmi 9",
                brand: "Xiaomi",
                model: "Redmi 9",
            },
            {
                name: "Iphone 14 Pro",
                brand: "Iphone",
                model: "14 Pro",
            }
        ], {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("Cellphones", null, {});
    }
};

// npx sequelize-cli db:seed:all
