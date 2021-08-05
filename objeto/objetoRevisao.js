// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro= {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade:56,
        endereco:{
            logradouro: 'Rua ABC',
            numero:123
        }
    },
    condutores: [{
        nome:'Junior',
        idade:19
    },{
        nome:'Ana',
        idade:42
    }],
    cacularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000 //alterando valor
carro['proprietario'] ['endereco'] ['logradouro']='Av Gomez Perreira'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.cacularValorSeguro
console.log(carro)
console.log(carro.condutores)//vai dar indefinido pq ele foi deletado
console.log(carro.condutores.length)//vai dar erro pq eu quero saber o tamanho de algo que não existe