require('dotenv').config();
const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('./services/common/XssService');

const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cookieParser());

app.use(express.static(__dirname));

app.use((req, res, next) => {
  req.body = xss.DoXss(req.body);
  next();
});

fs.readdir(process.env.EXPRESS_ROUTES_PATH, (err, files) => {
  files.forEach((file) => app.use(`/${file.replace('.js', '')}`, require(`${process.env.EXPRESS_ROUTES_PATH}${file}`)));
});

module.exports = app;
