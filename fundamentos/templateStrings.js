const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome}!`
console.log(concatenacao)
console.log(template)//método mais adequado

//expressoes...
console.log(`1+1=${1+1}`)//podemos até somar usando isso ${...}

const up = texto => texto.toUpperCase()//isso é uma função(com variavel)
console.log(`Ei.. ${up ('cuidado')}!`)//tudo isso que ta dentro das aspas é um template string