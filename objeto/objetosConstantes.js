// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'} pelo fato de pessoa ser uma constante eu não posso redefinir o valor

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// Outra forma de declarar um objeto constante
const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

