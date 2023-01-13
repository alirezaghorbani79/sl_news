const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Joi = require('joi')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg: "This account already exists. Fuck you."
        },
        isEmail: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 8,
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
})


function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    })

    return schema.validate(user);
}


exports.User = User
exports.validate = validateUser;