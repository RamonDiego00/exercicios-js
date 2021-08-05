const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})

//Uso o dirname para referenciar o meu disco de memoria ai coloco o nome do arquivo que eu vou gerar e depois o arquivo