function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo',123)
const aula2 = new Aula('Até Breve', 456)
// Esse new quer dizer que eu criei um objeto com base numa função construtora
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__=f.prototype
    f.apply(obj,params) 
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo',123)
const aula4 = novo(Aula,'Até Breve', 456)
console.log(aula3, aula4)

// o ... significa que eu vou concatenar os meus paramtro dentro de um array(params == array)
// o obj se torna o this do f Aula pra instanciar o momento