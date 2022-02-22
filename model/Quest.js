const sequelize = require('sequelize');
const db = require('../config/database');

const Quest = db.define("quest", {
    id: {
        type: sequelize.INTEGER,
        field: "id",
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize.STRING,
        field: "title"
    },
    isDone: {
        type: sequelize.BOOLEAN,
        field: "is_done"
    },
    description: {
        type: sequelize.STRING,
        field: "description"
    },
    isUrgent: {
        type: sequelize.BOOLEAN,
        field: "is_urgent"
    },
    isImportant: {
        type: sequelize.BOOLEAN,
        field: "is_important"
    }
});

module.exports = Quest;