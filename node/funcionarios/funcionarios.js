const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual ? func  : funcAtual
}// vai ficar trocando para o de menor salario


axios.get(url).then(response => {
    const funcionarios = response.data
   console.log(funcionarios)

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
    

/* como eu fiz
    const mulher = function(femi) {
        if (femi.genero == 'F' && femi.pais == 'China' && femi.salario <= 1000.00)  return femi
      }
    resultado = funcionarios.map(mulher)

    console.log(resultado) */
})

//o axios faz um requisição para o meu servidor ou URL



//Obter a mulher chinesa com menor salário