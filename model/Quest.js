const sequelize = require('sequelize');
const db = require('../config/database');

const Quest = db.define("quest", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize.STRING,
    },
    isDone: {
        type: sequelize.BOOLEAN,
    },
    description: {
        type: sequelize.STRING,
    },
    isUrgent: {
        type: sequelize.BOOLEAN,
    },
    isImportant: {
        type: sequelize.BOOLEAN,
    }
}, {
    underscored: true
});

module.exports = Quest;