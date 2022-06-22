var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();

const session = require('express-session');

//Requerimento de database//
const db = require("./database/models");
const User = db.User;

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

/* Configurar el session */
app.use(session({
    secret : 'sneakers',
    resave : false,
    saveUninitialized : true
  }));
  
  /* Middleware de session */
  app.use(function(req, res, next) {
    if ( req.session.user != undefined) {
      res.locals.user = req.session.user;
      return next()
    }
    return next();
  });
  
  /* creando el middleware de cookies .*/
  app.use(function(req, res, next) {
    if (req.cookies.userId != undefined && req.session.user == undefined) {
        let idUsuario = req.cookies.userId;
  
        User.findByPk(idUsuario)
        .then((user) => {
          req.session.user = user.dataValues;
          res.locals.user = user.dataValues;
          return next();
        }).catch((err) => {
          console.log(err);
        });
  
  
  
    } else {
      return next();
    }
    
  });


app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/product', productsRouter);


module.exports = app;
