# 1.Estrutura do projeto

Nesse módulos todos os arquivos ficarão dentro da pasta SRC e na raiz do projeto ficarão apenas os arquivos de configuração como o _gitignore_, _package.json_ e _package-lock_.json

Dentro da pasta SRC termos o server.js e as pastas Views (index.ejs) e Public (CSS e JS)

_Obs 1: Para exercutar o servidor com o nodemon usamos:_

```js
npm run dev
```

_Obs 2: dentro da pasta views todos os arquivos estão com a extensão ejs_

Depois de instalar o ejs temos que configurar no server.ejs

```js

npm i ejs

app.set('view engine', 'ejs')

```

esse comando irá procurar pela pasta view que está na raiz do programa, como a pasta não está na raiz do progrma devemos especificar usando:

```js
app.set("views", path.join(__dirname, "views"));
```

_Obs 3: Para importar um arquivos usando o ejs usamos:_

```js
<%- include('nomeDaPasta/arquivo.ejs')>
```

# 2. Conectando com o MongoDB.

Uma boa prática é criar uma pasta separada para tudo que for relcionado ao banco de dados, então dentro da pasta SRC criamos a pata _database_ com o arquivo _index.js_

```js
const mongoose = require("mongoose");

function connect() {
  mongoose.connetc("end do bd");

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("connected to database!");
  });

  db.on("error", console.error.bind(console, "connection error:"));
}

module.export = { connect };
```

Agora temos que importar para o _sever.js_

```js
const db = require("./database");

db.connect();
```

# 3. Estruturas de rotas

Uma boa prática é tirar as rotas do servidor e dentro da pasta SRC criamos a pasta _routes_ com o arquivo _index.js_

_Obs: na pasta routes não podemos usar o app, então vamos usar o método Router._

```js
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Titulo teste",
  });
});

module.exports = router;
```

Agora devemos importar para o server.

```js
const routes = require("./routes");

app.use("/", routes);
```

# 4. Document Schema (Model)

```js
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: string,
  age: number,
  email: string,
  password: string,
});

//criando collection
const Model = mongoose.model("customers", schema);
```

Agora devemos informar em qual bd queremos criar essa tabela. Na pasta de database em _mongoose.connect_ passamos o nome do bd _(projeto-crud)_ que vamos criar essa tabela

```js
mongoose.connect("mongodb:/localhost:27017/projeto-crud");
```

Para que o bd seja criado devemos iserir alguns registros

```js
const register = new Model({
  name:'Fulano',
  age: 35,
  email: 'fulano@email'
  password: '123456'
})

register.save()
```

Claro queremos que isso funciona apenas quando o formulário seja preenchido, então criamos a pasta _models_ e o _index.js_ onde vamos colocar:

```js
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: string,
  age: number,
  email: string,
  password: string,
});

const Model = mongoose.model("customers", schema);

module.expots = Model;
```

# 5.Controllers + Cadastrar Cliente

Nessa seção dentro da pasta _views_ criamos o araquivo _regiter.ejs_ e fizemos um formulário com name, age, email e password e dentro da pasta de _routes_ criamos a rota _register_.

_Obs Na pasta routes temos o método get para receber o fomuláro e na pasta de controllers o método Post para enviar o formulário para o bd._

# 6. Criptografar senhas

1° passo instalar e importar a biblioteca para criptografar senhas.

```js
npm i bcrypt

const bcrypt = require('bcrypt')
```

Como exemplo vamos criptografar a senha 1234567 usando uma função assíncrona.

```js
async function gerarSenha() {
  const senha = "1234567";
  const salt = await bcrypt.genSalt();
  const senhaCripto = await bcrypt.hash(senha, salt);
}

gerarSenha();
```

# 7. Listar clientes
