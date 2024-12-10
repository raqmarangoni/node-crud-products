const express = require('express')
const router = express.Router()
const controller = require('../controllers/ProductsController')

router.get('/products', controller.get)
router.get('/products/:id', controller.getById)

module.exports = router