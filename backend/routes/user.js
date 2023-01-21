const express = require("express");
const userController = require("../controllers/user");
const auth = require("../middleware/auth");
const router = express.Router();
const { User } = require("../models/user");
const Bookmark = require("../models/bookmark");
const { News } = require("../models/news");
const { Op } = require("sequelize");

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.put("/updateMe", [auth], userController.updateMe);

router.get("/bookmarks", auth, async (req, res) => {
  const bookmarks = await Bookmark.findAll({
    where: { userId: req.user.id },
    attributes: ["id"],
  });

  const bookmarksIds = bookmarks.map((el) => el.id);

  console.log(bookmarksIds)
  const news = await News.findAll();

  filteredNews = news.filter((el) => {
    return bookmarksIds.includes(el.id);
  });

  res.send(filteredNews);
});

router.post("/bookmarks", auth, async (req, res) => {
  const news = await News.findOne({ where: { id: req.body.id } });
  console.log(news);
  if (!news) {
    return res.status(404).send("News not found!");
  }

  const bookmark = await Bookmark.create({
    userId: req.user.id,
    newsId: req.body.id,
  });
  res.send(bookmark);
});

router.delete("/bookmarks", auth, async (req, res) => {
  const news = await News.findOne({ where: { id: req.body.id } });
  if (!news) {
    return res.status(404).send("News not found!");
  }

  await Bookmark.destroy({
    where: {
      userId: req.user.id,
      newsId: req.body.id,
    },
  });
  res.send("Bookmark deleted.");
});

module.exports = router;
