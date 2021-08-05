const moduloA = require('./moduloA')
const moduloB = require('./moduloB')
//Estou importando  arquivos da minha própria pasta
//O que eu exportei em um modulo vai estar armazenado na constante que eu determinei

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

