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
            },
            {
                name: "Samsung Galaxy S20",
                brand: "Samsung",
                model: "Galaxy S20",
            },
            {
                name: "Google Pixel 6",
                brand: "Google",
                model: "Pixel 6",
            },
            {
                name: "OnePlus 9 Pro",
                brand: "OnePlus",
                model: "9 Pro",
            },
            {
                name: "Huawei P40 Pro",
                brand: "Huawei",
                model: "P40 Pro",
            },
            {
                name: "Sony Xperia 1 III",
                brand: "Sony",
                model: "Xperia 1 III",
            },
            {
                name: "Motorola Edge+",
                brand: "Motorola",
                model: "Edge+",
            }
        ], {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("Cellphones", null, {});
    }
};

// npx sequelize-cli db:seed:all
