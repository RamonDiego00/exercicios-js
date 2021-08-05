
function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p.then(primeiroElemento)
 .then(primeiraLetra)
 .then(letraMinuscula)
 .then(console.log)//vai imprimir o que ele recebeu como parametro

/*p.then(function(valor) {
    console.log(valor)
})É a mesma coisa do de cima*/

//esse valor significa o meu array(cumprirPromessa)
//quando o valor for cumprido essa funçao vai ser chamada
//O cumprirPromessa === resolve do meu .then