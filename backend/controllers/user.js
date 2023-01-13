const {User, validate} = require('../models/user')
const catchAsync = require('../utils/catchAsync')
const jwt = require('jsonwebtoken')


const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 3600,
    })
}

const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user.id)
  
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
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    console.log(newUser)
    createSendToken(newUser, 201, req, res)
})


exports.login = catchAsync(async (req, res, next) => {
    const user = await User.findOne({ where: { email: req.body.email }})

    if(!user) {
        // return error
    }

    if (user.password !== req.body.password) {
        // return error
    }

    createSendToken(user, 200, req, res)

})