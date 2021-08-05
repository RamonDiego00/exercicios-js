console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
    //estou quebrando a frase em letras
    //split=quebra reverse=inverte a ordem join=une td 
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
    //vai pegar o primeiro elemento do array
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a','b','c','d'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}   //vai sobre-escrever essa função(não fazer)

console.log('Escola Cod3r'.reverse())