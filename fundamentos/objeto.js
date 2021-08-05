const prod1 = {}//esse aqui é o objeto onde eu vou adicionando valores de forma dinamica
prod1.nome = 'Celular Ultra Mega'//criei um identificador 'nome' com o valor celular...
prod1.preço = 4990,98//aqui eu fiz o mesmo porem com o preço
console.log(prod1)
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {//posso adicionar os valores de forma direta tbm 
    nome: 'Camisa Polo',
    preco: 79.90 
}//posso colocar uma função dentro do preço caso eu queira,deixando aninhadas

console.log(prod2)