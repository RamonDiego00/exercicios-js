let comparaComThis = function (param) {
    console.log(this===param)
}

comparaComThis(global)
//mudando o objeto de referencia do this

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//agora é mentira
comparaComThis(obj)//agora é vvd

let comparaComThisArrow = param =>console.log(this===param)
comparaComThisArrow(global)//na arrow o this não é global
comparaComThisArrow(module.exports)//teste para saber o this de uma arrow

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // a arrow é mais forte que o bind
comparaComThisArrow(module.exports)//continua com o original 