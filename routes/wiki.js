var express = require('express');
var router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;


router.get('/', (req, res, next) => {
  res.redirect('/')
});

router.post('/', (req, res, next) => {
  var urlTitle = req.body.title.split(' ')
  .join('_')
  .replace(/\W/g, 'x');
  var page = Page.build({
      title: req.body.title,
      content: req.body.content,
      urlTitle: urlTitle,
      status: req.body.page_status,
  })
  page.save();
  res.redirect('/');
});

router.get('/add', (req, res, next) => {
  res.render('addpage')
});



module.exports = router;
