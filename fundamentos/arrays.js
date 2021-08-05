const valores = [3.2, 4.5, 8.2, 9.7]//a virgula é o seperador de elementos
console.log(valores[0],valores[3])//chamei o indice 0 que é o 3.2 e chamei o indice 3 que é o 9.7
console.log(valores[4])//não vai dar erro,só vai falar qu esta indefinido

valores[4]=10//adicionei um valor ao 4° indice
console.log(valores)
console.log(valores.length)//fala quantos elementos tem dentro do array
valores.push({id:3},false,null,'teste')//com o push eu posso dicionar qualquer valor de qualquer tipo
console.log(valores)

console.log(valores.pop())//vai apagar o ultimo valor do array
delete valores[0]//nesse ele vai eliminar o primeiro valor do array
console.log(valores)

console.log(typeof valores)//sempre vai ser um objeto