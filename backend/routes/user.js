const express = require('express')
const userController = require('../controllers/user')
const auth = require('../middleware/auth')
const router = express.Router()
const { User } = require('../models/user')
const { Class } = require('../models/class')


router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.put('/updateMe', [auth], userController.updateMe)

router.post('/test', async (req, res) => {

    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: '123456',
        Classes: [{
            name: 'Sport'
        }]
    }, {
        include: Class
    }
    )

    await user.addClass(2)


    res.send('success');
});


module.exports = router
