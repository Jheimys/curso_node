const express = require('express')
const res = require('express/lib/response')
const path = require('path')


const app = express()

//Definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Habilitar server para receber dados via post (fomulários)
app.use(express.urlencoded({extended: true})) 

//Rotas
app.get('/', (req, res) =>{
    res.render('index',{
        title:'Titulo teste'
    })
})

//404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!')
})


//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Sever is listening on port ${port}`))







