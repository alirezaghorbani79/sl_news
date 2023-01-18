const catchAsync = require("../utils/catchAsync");
const { News, validateUpdate, validateCreate } = require('../models/news');


exports.getAllNews = catchAsync(async (req, res) => {
    // req.params.orderBy
    const news = await News.findAll()
    res.send(news);
})

exports.getOneNews = catchAsync(async (req, res) => {
    const news = await News.findOne({
        where: {
            id: req.params.id,
        }
    })

    news.viewCount++
    news.save()

    res.send(news);
})

exports.createNews = catchAsync(async (req, res) => {
    const { error } = validateCreate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const news = await News.create({
        title: req.body.title,
        body: req.body.body,
        picture: req.body.picture,
        class: req.body.class
    })
    res.send(news);
})

exports.updateNews = catchAsync(async (req, res) => {
    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const news = await News.findOne({
        where: {
            id: req.params.id,
        }
    })

    if (!news) return res.status(404).send('The news with the given ID was not found.');

    await News.update(
        {
            title: req.body.title,
            body: req.body.body
        }, {
        where: {
            id: req.params.id
        }
    });

    res.send('News was updated successfully.');
})

exports.deleteNews = catchAsync(async (req, res) => {
    const news = await News.findOne({
        where: {
            id: req.params.id,
        }
    })

    if (!news) return res.status(404).send('The news with the given ID was not found.');

    await News.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send('News was deleted successfully.');
})