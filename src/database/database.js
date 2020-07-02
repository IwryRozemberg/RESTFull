const e = require('express');

const environment = process.env.NODE_ENV || 'development'
const
    Sequelize = require('sequelize'),
    config = require('../config/config')[environment];

const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password, {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;