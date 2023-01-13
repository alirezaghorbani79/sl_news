const express = require('express')
const userController = require('../controllers/user')
const auth = require('../middleware/auth')
const router = express.Router()
const { User } = require('../models/user')


router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.put('/updateMe', [auth], userController.updateMe)

router.post('/test', async (req, res) => {

    const user = await User.create({
        name: req.body.name,
        email: 'bbbb@gmail.com',
        password: '123456',
        Classes: [{
            name: 'Sport'
        }]
    }, {
        include: Class
    }
    )


    res.send('success');
});


module.exports = router
