var express = require('express');
var router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;


router.get('/', (req, res, next) => {
  res.redirect('/')
});

router.post('/', (req, res, next) => {
  var page = Page.build({
      title: req.body.title,
      content: req.body.content,
      status: req.body.page_status,
  })
  page.save();
  res.json(page);
});

router.get('/add', (req, res, next) => {
  res.render('addpage')
});

router.get('/:page', (req, res, next) => {
  res.json(Page.findAll({
    where: {
      urlTitle: req.params.page
    }
  }))
})

module.exports = router;
