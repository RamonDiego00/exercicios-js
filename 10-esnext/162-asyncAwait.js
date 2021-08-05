//com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject) => {
        http.get(url, res => {
            let resultado = ''//pra concatenar os valores depois
    
            res.on('data',dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
// O await substitui o .then para deixar mais rapido
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb ,tc)
}// retorna u objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

// Coloquei minhas funções dentro de variaveis e ao final eu dei um concat e usei um map pra pegar o que eu quero