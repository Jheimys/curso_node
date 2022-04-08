// Como aqui não tenho o método app substituo pelo Router


const router = require('express').Router()

const CustomersController = require('../controllers/customers')

//Rotas
router.get('/', (req, res) =>{
    res.render('index',{
        title:'Titulo teste'
    })
})

router.get('/register', (req, res) =>{
    res.render('register',{
        title:'Cadastro de clientes'
    })
})

router.post('/register/add', CustomersController.add)




module.exports = router