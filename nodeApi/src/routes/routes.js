
const router = require('express').Router()
const ProductsControllers = require('../controllers/products')

// ? --> faz com que o id seja opcional na rota
router.get('/products/:id?', ProductsControllers.get)

module.exports = router