var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
  res.redirect('/')
})
router.post((req, res, next) => {
  res.send('got to POST /wiki/')
})
router.get('/add', (req, res, next) => {
  res.render('addpage')
})


module.exports = router;
