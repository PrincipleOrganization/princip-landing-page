'use strict';

/**
* Module dependencies.
**/

const router = require('express').Router();
var markdown = require("node-markdown").Markdown;

/**
* Module body.
**/

router.get('/', (req, res) => {
  res.redirect('/en');
});

router.get('/en', (req, res) => {
  var fs = require('fs');
  fs.readFile('./src/client/md/test.md', (err, file) => {
    let message = file.toString();
    res.render('index', { title: 'Hey', message, markdown });
  });
});

/**
* Export.
**/

module.exports = router;
