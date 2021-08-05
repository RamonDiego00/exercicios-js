const peso1 = 1.0
const pesox = Number['2.0']//outra forma de adicionar um valor
const peso2 = 2.0

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//maneira de ver se o numero é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.675
const avaliacao2 = 6.785

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(total )
console.log(media.toFixed(2))//assim eu defino quantas casas decimais eu quero
console.log(media.toString(2))//transforma em um valor binário
console.log(typeof media)
