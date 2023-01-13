const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

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
    date: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
    }
})

function validateNews(news) {
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        body: Joi.string().min(5).max(2000).required(),
        picture: Joi.string().required()
    }

    return Joi.validate(news, schema);
}

exports.News = News;
exports.validate = validateNews;

