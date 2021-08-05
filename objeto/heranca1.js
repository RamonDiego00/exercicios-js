const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax:200
}

console.log(ferrari.__proto__)
//Assim eu posso saber quem é o objeto pai

console.log(ferrari.__proto__ === Object.prototype)
//qualquer objeto que eu criar vai para esse object.prototype(pai supremo),porem eu posso mudar esse referencial
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)//Não tem pai o pai supremo,dá null

console.log(Object.prototype.__proto__=== null)

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)