const express = require('express');
const router = express.Router();
const wiki = require('./wiki');
const user = require('./user');


router.get('/', function(req, res, next) {
  console.log('Howdy');
  res.render('index');
})

router.use('/wiki', wiki);
// router.use('/user', user);


module.exports = router
