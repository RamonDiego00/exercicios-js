Object.prototype.attr0 = 0 // não faça isso
const avo = { attr1: 'A'}
const pai = {__proto__:avo,attr2:'B',attr3:'3'}
const filho = {__proto__:pai,attr3:'C'}
console.log(filho.attr0,filho.attr1,filho.attr2)
//se naõ existir nem no object.prototype ele dá undefined

//Ele sempre vai procurar o atributo mais próximo e assim não ir mais afundo ma cadeia

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <=this.velMax ) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}:${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)
//Relação de protótipo entre 2 objetos(filho(ferr) e pai(car))

console.log(ferrari)
//atributos normais da ferrari
console.log(volvo)
//o volvo consogue referenciar a velmax porem ele chama uma função que faz isso(status),então temos apenas que adicionar um vamor a ela

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

//posso chamar uma função que esta dentro do objeto que estou herdando