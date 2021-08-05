const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
]

// Retornar um array apenas com os preços

//como eu fiz

let preco = carrinho.map(function(e) {
    return JSON.parse(e)
})

console.log(preco)

const apagar = e => Object.values(e)
const array = e =>Object.entries(e)
const Sopreco = e => e.slice(1, 2)

console.log(preco.map(apagar))
console.log(preco.map(array).map(Sopreco))

//como ele fez

const paraObjeçto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
//chame só o atributo preco do meu object

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)