// Object.preventExtensions(proibe adicionar novos atributos)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:',Object.isExtensible(produto))
//pra saber se o objeto pode ser extendido(nesse caso não)

produto.nome = 'Borracha'
produto.descricao = 'Borraca escolar branca'
delete produto.tag
console.log(produto)
// são testes pra ver se ele só vai proibir adicionar novos atributos mesmo 

// Object.seal(proibe adicionar e remover atributos)
const pessoa = {nome:'Juliana',idade: 35}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))
//pra saber se objeto foi selado

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
//teste para ver se ele só pode ser modificado
console.log(pessoa)

// Object.freeze = selado + valores constantes