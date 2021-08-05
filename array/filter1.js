const produtos = [
    {nome: 'Notebook',preco: 2499, fragil:true},
    {nome: 'iPad Pro',preco: 4199, fragil:true},
    {nome: 'Copo de Vidro',preco: 12.49, fragil:true},
    {nome: 'Copo de Plástico',preco: 18.99, fragil:false},
]

console.log(produtos.filter(function(p) {
    return false
}))


//o (p) representada cada produto e não uma condição

// como eu fiz

const caro2 = function(c) {
  if (c.preco >= 500.00  )  return c
}

const fragil2 = function(f) {
    return f.fragil == true 
}

console.log(produtos.filter(fragil2))
console.log(produtos.filter(caro2))

console.log(produtos.filter(caro2).filter(fragil2))

//como ele fez

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
// o filter já faz esse teste de true e false então eu não preciso usar o == (true o false)

console.log(produtos.filter(caro).filter(fragil))