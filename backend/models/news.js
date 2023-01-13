const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Joi = require('joi')


const News = sequelize.define('news', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    viewCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

function validateNews(news) {
    const schema = Joi.object({
        title: Joi.string().min(5).max(50).required(),
        body: Joi.string().min(5).max(2000).required(),
        picture: Joi.string().required()
    })

    return schema.validate(news);
}

exports.News = News;
exports.validate = validateNews;

