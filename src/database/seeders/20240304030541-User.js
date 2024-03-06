"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("Users", [  
            {
                email:  "admin@admin.com",
                password: "$2b$10$aQTxYhSMrgWgx2QoShdPre2ruCslytkcxwDI.kGjiT01UqbEO/Mcm"
            }
        ], {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("Users", null, {});
    }
};

// npx sequelize-cli db:seed:all
