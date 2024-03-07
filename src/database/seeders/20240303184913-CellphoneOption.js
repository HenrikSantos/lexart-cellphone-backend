"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("CellphoneOptions", [  
            {
                CellphoneId: 1,
                price:  8500,
                color: "black"
            },
            {
                CellphoneId: 2,
                price:  9320,
                color: "silver"
            },
            {
                CellphoneId: 3,
                price:  9500,
                color: "black"
            },
            {
                CellphoneId: 3,
                price:  9800,
                color: "silver"
            },
            {
                CellphoneId: 4,
                price:  8500,
                color: "white"
            },
            {
                CellphoneId: 4,
                price:  8800,
                color: "green"
            },
            {
                CellphoneId: 5,
                price:  9200,
                color: "blue"
            },
            {
                CellphoneId: 5,
                price:  9400,
                color: "green"
            },
            {
                CellphoneId: 6,
                price:  10500,
                color: "gold"
            },
            {
                CellphoneId: 6,
                price:  10800,
                color: "rose gold"
            },
            {
                CellphoneId: 7,
                price:  9200,
                color: "black"
            },
            {
                CellphoneId: 7,
                price:  9500,
                color: "blue"
            },
            {
                CellphoneId: 8,
                price:  8900,
                color: "silver"
            },
            {
                CellphoneId: 8,
                price:  9200,
                color: "purple"
            }
        ], {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("Cellphones", null, {});
    }
};

// npx sequelize-cli db:seed:all
