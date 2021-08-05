function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
//o proto de um objeto novo vai apontar para para o .prototype da minha função construtora

MeuObjeto.prototype.nome= 'Anônimo'//atributo novo nome
MeuObjeto.prototype.falar= function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

//

const obj3 = {}
obj3.__proto__=MeuObjeto.prototype//Mudei o pai Supremo de Object.prototype para esse meuObjeto.prototype

obj3.nome = 'obj3'
obj3.falar()

//Resuindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null )