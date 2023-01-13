const { News, validate } = require('../models/news');
const express = require('express');
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const router = express.Router();

router.get('/', async (req, res) => {
    // req.params.orderBy
    const news = await News.findAll()
    res.send(news);
});

router.get('/:id', async (req, res) => {
    const news = await News.findOne({
        where: {
            id: req.params.id,
        }
    })
    res.send(news);
});

router.post('/', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const news = await News.create({
        title: req.body.title,
        body: req.body.body,
        picture: req.body.picture
    })
    res.send(news);
});

router.put('/:id', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newsFound = await News.findOne({
        where: {
            id: req.params.id,
        }
    })
    console.log(newsFound)

    const news = await News.update(
        {
            title: req.params.title,
            body: req.params.body
        }, {
        where: {
            id: req.params.id
        }
    });

    console.log(news)

    res.send(news);
});

module.exports = router

