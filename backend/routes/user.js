const express = require('express')
const userController = require('../controllers/user')
const auth = require('../middleware/auth')
const router = express.Router()
const { User } = require('../models/user')
const { Bookmark } = require('../models/bookmark')
const { News } = require('../models/news')


router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.put('/updateMe', [auth], userController.updateMe)

// router.post('/test', async (req, res) => {
//     const user = await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: '123456',
//         Classes: [{
//             name: 'Sport'
//         }]
//     }, {
//         include: Class
//     }
//     )

//     await user.addClass(2)
//     res.send('success');
// });


router.get('/bookmarks', auth, async (req, res) => {
    const newsIds = await Bookmark.findAll({ where: { id: req.user.id } })
    const news = await News.findAll({
        where: {
            [Op.in]: newsIds
        }
    });
    res.send(news);
});

router.post('/bookmarks', auth, async (req, res) => {
    const news = await News.findOne({ where: { id: req.body.id } })
    if (!news) {
        res.status(404).send('News not found!')
    }

    const bookmark = await Bookmark.create({
        userId: req.user.id,
        newsId: req.body.id
    })
    res.send(bookmark)
});

router.delete('/bookmarks', auth, async (req, res) => {
    const news = await News.findOne({ where: { id: req.body.id } })
    if (!news) {
        res.status(404).send('News not found!')
    }

    await Bookmark.destroy({
        where: {
            userId: req.user.id,
            newsId: req.body.id
        }
    });
    res.send('Bookmark deleted.')
});



module.exports = router
