function saudacao(nome) {
    return function(req, res, next) {
        console.log(`Eae ${nome}!`)
        
        next()
    }
}

module.exports = saudacao