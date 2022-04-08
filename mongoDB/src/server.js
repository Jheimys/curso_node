/*
    - npm install bcrypt --> biblioteca para criptografar senhas
*/

const express = require('express')
const res = require('express/lib/response')
const path = require('path')



const db = require('./database')
const routes = require('./routes')



const app = express()



//conexão com o banco de dados
db.connect()

/*
const register = new Model({
    name:'Thiago',
    age: 35,
    email: 'thiago@email.com',
    password: '123456',
})

register.save()
*/

//Definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Habilitar server para receber dados via post (fomulários)
app.use(express.urlencoded({extended: true})) 

//definindo as rotas
app.use('/', routes)

//404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!')
})


//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Sever is listening on port ${port}`))







