const Sequelize = require('sequelize');
const sequilize = require('../database/database.js');

const Spoiler = sequilize.define('spoiler', {
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }
    },
    espoliador: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
            len: [2, 40]
        }
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }
    }
});

module.exports = Spoiler;