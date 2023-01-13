const { User, validate } = require('../models/user')
const catchAsync = require('../utils/catchAsync')
const jwt = require('jsonwebtoken')


const signToken = (id, isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
        expiresIn: 3600,
    })
}

const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user.id, user.isAdmin)

    res.cookie('jwt', token, {
        expires: new Date(
            Date.now() + 3600 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    })

    user.password = undefined

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    })
}


exports.signUp = catchAsync(async (req, res, next) => {
    const { error } = validate(req.body)

    if (error) return res.status(400).send(error.details[0].message)
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    console.log(newUser)
    createSendToken(newUser, 201, req, res)
})


exports.login = catchAsync(async (req, res, next) => {
    const user = await User.findOne({ where: { email: req.body.email } })

    if (!user) {
        res.status(404).send('User not found!')
    }

    if (user.password !== req.body.password) {
        res.status(401).send('User not found!')
    }

    createSendToken(user, 200, req, res)

})

exports.updateMe = catchAsync(async (req, res) => {
    const user = await User.findOne({ where: { id: req.user.id } })

    if (!user) {
        res.status(404).send('User not found!')
    }

    await User.update(
        {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            favoriteClasses: req.body.favoriteClasses
        }, {
        where: {
            id: req.params.id
        }
    });

    res.send('User was updated successfully')
})