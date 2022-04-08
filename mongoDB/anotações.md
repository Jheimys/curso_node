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

_Obs 3: Para importar um arquivo sauando o ejs usamos:_

```js
<%- include('nomeDaPasta/arquivo.ejs')>
```

# 2. Conectando com o MongoDB

# 1. Criptografar senhas

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

# 2. Listar clientes
