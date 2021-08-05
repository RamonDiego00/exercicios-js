// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))
//o return deve ser explicito caso haja bloco(chaves)

//Arrow Function
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})//isso é pra mudar a referencia do this para um objeto vazio(não rola)
lexico1()
lexico2()

// parametro default(valor padrão)
function log(texto = 'Node') {
    console.log(texto)

} 
log()
log('Sou mais forte')// vai tirar o padrão

// operador rest ou spred
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))

//colocar varios parametros na função e os parametro serão agrupados em um array internamente na função