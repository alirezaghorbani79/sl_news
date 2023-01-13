const Sequelize = require('sequelize')
const sequelize = require('../utils/database')


const Bookmark = sequelize.define('bookmark', {})

module.exports = Bookmark;
