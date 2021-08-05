Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {     
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
//para fazer isso eu criei um novo array,onde a ultma coisa que for adicionada vai retornar a callback 
const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
]

// Retomar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
//chame só o atributo preco do meu object

const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)