const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes')

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(routes);

app.listen(3000, function(){
  console.log('listening on port 3000')
});
