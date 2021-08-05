const tecnologias = new Map()
tecnologias.set('react', {framework: false})//uso o set() para adicionar valores
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)//jeito errado
console.log(tecnologias.get('react'))//tenho que usar o get no map para chamar a minha chave
console.log(tecnologias.get('react').framework)//posso chamar o objeto
 
//Criando o map já com valores(as virgulas separam a chave do valor dentro do array)
const chavesVariadas = new Map([
    [function () {} , 'Função'],
    [{}, 'Objeto'],
    [123,'Número']
])

chavesVariadas.forEach((vl, ch) => { //no foreach a callback retorna dois parametros que são valor e a chave
    console.log(ch, vl)
})

//A função has() é pra saber se o elemento esta dentro do Map

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.delete(123))//retorna true caso consiga deletar
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)//pra saber quantos elementos tem

//Não tem repetição de chaves,mas pode ter de valores
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')//sobre escreve
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)