'use strict';

/**
* Module dependencies.
**/

const router = require('express').Router();
const markdown = require("node-markdown").Markdown;
const axios = require('axios');

/**
* Module body.
**/

const mdApiMainPath = 'https://raw.githubusercontent.com/PrincipleOrganization/princip-landing-page/md/';

const FETCH_PRODUCTS_PATH = 'products.md';
const FETCH_ABOUT_PATH = 'about.md';
const FETCH_SERVICES_PATH = 'services.md';

router.get('/', (req, res) => {
  res.redirect('/en');
});

router.get('/en', (req, res) => {
  let message_products, message_services, message_about;

  axios.get(`${mdApiMainPath}${FETCH_PRODUCTS_PATH}`)
    .then(result => {
      message_products = result.data;
      return axios.get(`${mdApiMainPath}${FETCH_ABOUT_PATH}`);
    })
    .then(result => {
      message_about = result.data;
      return axios.get(`${mdApiMainPath}${FETCH_SERVICES_PATH}`);
    })
    .then(result => {
      message_services = result.data;

      res.render('index', {
        title: 'Princip',
        message_products,
        message_services,
        message_about,
        markdown
      });
    });
});

/**
* Export.
**/

module.exports = router;
