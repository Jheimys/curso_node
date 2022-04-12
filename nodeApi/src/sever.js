
const express = require('express')
const res = require('express/lib/response')
//const path = require('path')



//const db = require('./database')
const routes = require('./routes/routes')



const app = express()



//conexão com o banco de dados
//db.connect()


//Habilitar server para receber dados via post (fomulários)
app.use(express.urlencoded({extended: true})) 

//definindo as rotas
app.use('/api', routes)


//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Sever is listening on port ${port}`))







