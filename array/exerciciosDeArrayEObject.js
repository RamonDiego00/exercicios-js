// ex1
const ola = function(nome) {
    return `Olá,${nome}!`
}
console.log(ola('Ramon'))

// ex2

const idadeEmDias = function(anos) {
    return anos * 365
}

console.log(idadeEmDias(20))

// ex3

const salario = function(horas,receber) {
    const salarioBruto = horas * receber
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return `Salário igual a R$${salarioLiquido}`
}

console.log(salario(8,2))

// ex4

function meses(ordem) {
    if ( ordem == 1){
      console.log(ordem = "Janeiro")  
    }
    else if ( ordem == 2){
       console.log(ordem = "Fevereiro") 
    }
    else if ( ordem == 3){
       console.log(ordem = "Março") 
    }
    else if ( ordem == 4){
        console.log(ordem = "Abril") 
    }
    else if ( ordem == 5){
        console.log(ordem = "Maio") 
    }
    else if ( ordem == 6){
        console.log(ordem = "Junho")
    }
    else if ( ordem == 7){
        console.log(ordem = "Julho")
    }
    else if ( ordem == 8){
        console.log(ordem = "Agosto")
    }
    else if ( ordem == 9){
        console.log(ordem = "Setembro")
    }
    else if ( ordem == 10){
        console.log(ordem = "Outubro")
    }
    else if ( ordem == 11){
        console.log(ordem = "Novembro")
    }
    else if ( ordem == 12){
        console.log(ordem = "Dezembro")
    }
    else  {
        console.log("Este número não é valido,digite um número de 1 a 12 no máximo")
    } 
    
}

meses(1)
meses(7)
meses(10)
meses(12)
meses(13)

//ex5
const maiorOuIgual = function(primeiro,segundo) {
    if ( typeof primeiro != typeof segundo) return false

    return primeiro >= segundo
}

maiorOuIgual(0,0)
maiorOuIgual(0,"0")
maiorOuIgual(5,1)   

//ex6
const inverso = function(valor) {
    const tipo = typeof valor
    if(tipo == "boolean") { console.log(!valor)}
    else if (tipo == "number") { console.log(-valor)}
    else {console.log(`booleano ou número esperados,mas o parâmetro é do tipo ${typeof valor}`)}
}

inverso(-5)
inverso(true)

//ex7
const estaEntre = function( minimo, maximo, numero,inclusivo=false ) {
    if (inclusivo) return numero >= minimo && numero <= maximo 
        
    return numero > minimo && numero < maximo
    
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))

//ex8

const multiplicar = function(inteiro1,inteiro2) {
 let resultado = 0
for (let i = 0; i < inteiro2; i++)
    resultado += inteiro1

    return console.log(resultado)
}

multiplicar(5, 5)
multiplicar(0, 7)

//ex9 

const repetir = function (item,quantidade) {
    let resultado = []
for (let i = 0; i < quantidade; i++)

resultado.push(item)

return console.log(resultado)
}

repetir('eu',7)

//ex10


const simboloMais = function(quantidade) {
    let resultado = ''

    for(let i = 0; i < quantidade; i++)
        resultado += '+'

    return console.log(resultado)
}

simboloMais(5)

//ex11

const receberPrimeiroEUltimoElemento = function(primeiro, intervalo, ultimo) {
    let areia = [`${primeiro,intervalo,ultimo}`]
   const areia2 = areia.slice(0)
   areia2.unshift(primeiro)
    return console.log(areia2)
}

receberPrimeiroEUltimoElemento(7,14,"olá")
receberPrimeiroEUltimoElemento(-100, "aplicativo", 16)

//ex12

const obj = {}

const removerPropriedade = function (objeto,nomeDaPropriedade) {
   const copia = Object.assign({}, objeto)
   delete copia[nomeDaPropriedade]

   return console.log(copia)
    
}

removerPropriedade({a: 1, b: 2}, "a")

// ex13

const filtrarNumeros = function(array) {
    const resultado = []
for(let item of array)
if(typeof item === "number")
resultado.push(item)

    return console.log(resultado )
}

filtrarNumeros(["Javascript", 1, "3", "Web",20])
filtrarNumeros(["a","c"])

//ex14 

function objetoParaArray(objeto) {

    return console.log(Object.entries(objeto))

    }
    objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
        })
        objetoParaArray({
            codigo: 11111,
            preco: 12000
            }) 
//ex15

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return console.log(numeroPar && indicePar)
    })
    }
    

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])

receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])

//ex16

function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0
   return  console.log((divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
    )}

checarAnoBissexto(2020) 
checarAnoBissexto(2100) 

//ex17

function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return console.log(soma)
    }
    
    

somarNumeros([10, 10, 10]) 
somarNumeros([15, 15, 15, 15]) 

//ex18

function despesasTotais(itens) {
    return console.log(itens
    .map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual))
    }
    

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]) 

    despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) 

    //ex19