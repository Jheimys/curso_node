/*
    Arquivos públicos: imagens, js, css
    Arquivos estaticos: html
*/

const express = require('express')
const path = require('path')// Biblioteca para manipular endereços de pastas
const fs = require('fs')

const app = express()

//Definindo o template engine
app.set('view engine','ejs') // essa extensão vai porcurar todas as extensões ejs


//MVC - Model View Controller


//Definidos os arquivos estaticos
/*

Com o template engine não preciso  mais usar os arquivos estáticos

const staticFolder = path.join(__dirname, 'views')  o __dirname é o endereço atual o método 
join concatena o  meu endereço atual com a pasta views 

const expressStatic = express.static(staticFolder)
app.use(expressStatic)

*/

/*
const publicFolder = path.join(__dirname, 'public') 
const expressPublic = express.static(publicFolder)
app.use(expressPublic)
*/

app.use(express.static(path.join(__dirname,'public')))


//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extended:true}))


//Rotas
//request e response
app.get('/', (req, res)=> {
    res.render('index', {
        title:'Digital tech - Home'
    })
})

app.get('/posts', (req, res)=> {
    res.render('posts', {
        title:'digital tech - posts',
        posts:
        [
            {
                title:'Novidade no mundo da tecnologia',
                text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae cupiditate quam, corrupti saepe, modi ipsam veniam praesentium sapiente nisi delectus perferendis. Perspiciatis error quas, aut vitae voluptates numquam porro dignissimos!',
                stars: 3,
            },

            {
                title:'Criando um servidor',
                text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae cupiditate quam, corrupti saepe, modi ipsam veniam praesentium sapiente nisi delectus perferendis. Perspiciatis error quas, aut vitae voluptates numquam porro dignissimos!',
                },
            
            {
                title:'Javascript',
                text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae cupiditate quam, corrupti saepe, modi ipsam veniam praesentium sapiente nisi delectus perferendis. Perspiciatis error quas, aut vitae voluptates numquam porro dignissimos!',
                stars: 5,
                },
         ]
    })
})


app.get('/cadastroPosts', (req, res)=> {
    const{ c } = req.query
    res.render('cadastroPosts', {
        title:'Digital tech - Cadastrar posts',
        cadastrado: c,
    })
})


app.post('/salvar-post', (req, res) =>{
    const {titulo, texto} = req.body

    const data = fs.readFileSync('./store/posts.json')
    const posts = JSON.parse(data)

    posts.push({
        titulo,
        texto,
    })

    const postsString = JSON.stringify(posts)
    fs.writeFileSync('./store/posts .json', postsString)


    res.redirect('/cadastroPosts?c=1')
})

//404 error (not found)
app.use((req, res) => {
    res.send('Pagina não encontrada')
})



//Executando o  servidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Sever is listening on port ${port}`))