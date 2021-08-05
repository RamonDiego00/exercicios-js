const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)
//eu somei valores e então eu mudei o valor original que era 1 para 3,pois eu incrementei duas vezes e assim e ele guardou o cache do objeto original

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
//isso quer dizer que na função nós não guardamos cache