const Sequelize = require('sequelize')

const sequelize = new Sequelize('sl_news', 'root', 'parmis0179', {
    dialect: 'mysql',
    host: '127.0.0.1',
})

module.exports = sequelize