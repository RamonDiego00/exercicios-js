console.log(typeof Array, typeof new Array, typeof [])

//Igual quando cria objeto

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//criando de forma literal(mais recomendável)

aprovados = ['Carlos', 'Bia', 'Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//colocando novo elemento

aprovados[3] = 'Paulo'//melhor para editar
aprovados.push('Abia')//colacar no ultimo elemento(melhor)

console.log(aprovados.length)//Tamanho do array

aprovados[9] ='Rafael'//os indices entre ele vai ser undefned
console.log(aprovados.length)
console.log(aprovados[8] == undefined)//prova real

console.log(aprovados)
aprovados.sort()//organiza por ordem alfabetica
console.log(aprovados)

delete aprovados[1]//ele não reorganiza,só dá undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = 'Bia', 'Carlos','Ana'
aprovados.slice(1,2,'Elemento1','Elemento2')//adiciona ou remove elementos do incice

//ele vai excluir 2 elemento apartir do indice 1

console.log(aprovados)