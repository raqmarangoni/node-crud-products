const express = require('express')
const router = express.Router()
const controller = require('../controllers/ProductsController')

router.get('/products', controller.get)

module.exports = router