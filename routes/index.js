var express = require('express');
var router = express.Router();

module.exports = function(){
  router.get(function(req, res, next) {
    console.log('Howdy');
    res.send('index.html');
  })
};
