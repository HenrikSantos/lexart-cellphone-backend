"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("Users", [  
            {
                email:  "admin@admin.com",
                password: "admin"
            },
            {
                email:  "user@user.com",
                password: "user"
            },
        ], {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("Users", null, {});
    }
};

// npx sequelize-cli db:seed:all
