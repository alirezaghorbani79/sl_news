const { News, validateUpdate, validateCreate } = require('../models/news');
const express = require('express');
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const newsController = require('../controllers/news')
const router = express.Router();

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getOneNews);
router.post('/', [auth, admin], newsController.createNews);
router.put('/:id', [auth, admin], newsController.updateNews);
router.delete('/:id', [auth, admin], newsController.deleteNews);

router.post('/test', async (req, res) => {

    const news = await News.create({
        title: req.body.title,
        body: 'body',
        picture: 'picture'
    })

    await rel.create(
        {
            userId: news.id,
            classId: 3
        }
    )

    res.send();
});


module.exports = router
