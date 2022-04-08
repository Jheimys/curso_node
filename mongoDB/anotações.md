# Criptografar senhas

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
