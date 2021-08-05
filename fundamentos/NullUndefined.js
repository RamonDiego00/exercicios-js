let valor //inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)//usa o null para zerar a variavel
//console.log(valor.toString()) //Erro,pois valor é nulo!

const produto = {}//ele está definido,não em undefined
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco //para tirar o atributo de um objeto
console.log(produto)

produto.preco = null // sem preço ou de graça
console.log(!!produto.preco)
console.log(produto)

//Tudo isso é para cancelar o atributo por referência