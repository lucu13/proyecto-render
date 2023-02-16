const express = require('express')
const router = express.Router()

const indexController = require('../controller/index.controller')
const homeController = require('../controller/home.controller')
const altaController = require('../controller/alta.controller')
const contacController = require('../controller/contact.controller')
const aboutController = require('../controller/about.controller')


router.get('/', indexController.index);
router.get('/home', homeController.home);
router.get('/alta', altaController.show);
router.get('/contact', contacController.contact)
router.get('/about', aboutController.about)

module.exports = router

