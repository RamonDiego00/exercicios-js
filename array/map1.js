const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

// o map segura o meu array,ai dentro do map eu posso colocar uma função que vai transformar os valores desse meu array em um novo array
console.log(resultado)

// 

const soma10 = e => e +10 
const triplo = e => e * 3
const paraDinheiro = e =>`R$ ${parseFloat(e).Tofixed(2).replace('.',',')}`;

//criei funções que vão ser chamadas no callback do meu map

//e agora eu posso colocar um map dentro do meu map pq o map tb é um arrray,então pode ser em cadeia

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)