var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const  app = express();

let session = require('express-session')

//Requerimento de database//
const db = require("./database/models")
const User = db.User

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




var indexRouter = require('./routes/main');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/product', productsRouter);


module.exports = app;
