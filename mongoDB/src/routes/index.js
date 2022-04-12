// Como aqui não tenho o método app substituo pelo Router


const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

//Rotas
router.get('/', IndexController.index)


//regitro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//listar
router.get('/list', CustomersController.list)

//editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//remove

router.get('/remove/:id', CustomersController.remove)




module.exports = router