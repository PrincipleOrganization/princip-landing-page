'use strict';

/**
* Module dependencies.
**/

const router = require('express').Router();
const i18n = require('./i18n');

/**
* Module body.
**/

router.get('/', (req, res) => {
  res.redirect('/en');
});

router.get('/en', (req, res) => {
  renderPage('en', res);
});

router.get('/ua', (req, res) => {
  renderPage('ua', res);
});


const renderPage = (language, res) => {
  res.render('index', i18n(language));
}

/**
* Export.
**/

module.exports = router;
