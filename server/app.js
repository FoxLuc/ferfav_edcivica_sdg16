var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors');

var indexRouter = require('./routes/index');
var briberyRouter = require('./routes/bribery'); //corruzione
var expenseRouter = require('./routes/expense'); //spese del governo
var birthRouter = require('./routes/birth'); //nascite registrate

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/bribery', briberyRouter);
app.use('/expense', expenseRouter);
app.use('/birth', birthRouter);

module.exports = app;
