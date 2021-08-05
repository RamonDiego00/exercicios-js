function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 4569,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())//chamando ela normal
console.log(produto.getPreco())//chamando atravez de um objeto

// Usando o call

const carro = { preco: 49990, desc:0.20}

console.log(getPreco.call(carro)) // chama usando call e tem como parametro o objeto carro,caso não tenha nada ele pega do global

// Usando o apply

console.log(getPreco.apply(carro))// faz o mesmo que o call

console.log(getPreco.call(carro,0.17,'$'))// coloquei em que local ela vai ser executuda(carro) e mudei os parametro da original(getpreco)

console.log(getPreco.apply(carro,[0.17,'$']))// fez o mesmmo que o call acima,mas ele tem que ter um array 




