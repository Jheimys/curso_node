
const router = require('express').Router()
const ProductsControllers = require('../controllers/products')

// ? --> faz com que o id seja opcional na rota
router.get('/products/:id?', ProductsControllers.get)
router.post('/products', ProductsControllers.post)
router.put('/products/:id', ProductsControllers.put)
router.delete('/products/:id', ProductsControllers.remove)
module.exports = router