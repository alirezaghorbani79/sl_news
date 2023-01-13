const express = require('express')
const userController = require('../controllers/user')
const auth = require('../middleware/auth')
const router = express.Router()


router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.put('/updateMe', [auth], userController.updateMe)

module.exports = router
