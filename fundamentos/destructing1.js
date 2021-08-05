const pessoa = {
    nome:'Ana',
    idade: 5,
    endereço: {
        logradouro : 'Rua ABC',
        numero:1000
    }
}

const {nome, idade } = pessoa
console.log(nome, idade)//viraram globais

const {nome:n,idade: i}= pessoa//renomei elas
console.log(n, i)

const {sobrenome, bemHumorada = true}= pessoa //não existe, mas posso atribuir durante
console.log(sobrenome,bemHumorada)

const{endereço:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)

const {conta:{ag,num}} = pessoa
console.log(ag, num)//dá erro pq o caminho não faz sentido pq ele não esta em um estrutura
