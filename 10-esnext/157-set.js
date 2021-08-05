// não aceita repetição(não pode ter dois itens igual)/não indexada(não tem indice)
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')//Nãova aceitar

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

//Para criar já com valores
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)