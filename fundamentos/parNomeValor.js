//par nome/valor
const saudacao = 'Opa' //contexto léxico 1 //local do meu código nome/valor

function excec() {
    const saudacao = 'Fala'//contexto léxico 2 
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade:32,
    peso:90,
    endereço: {
        logradouro:'Rua legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)