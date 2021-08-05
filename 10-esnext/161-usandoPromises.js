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

/*let nomes = []
getTurma('A').then( alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B').then( alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
        getTurma('C').then( alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

//Complicado demais pq fica uma callback dentro de outra ai fica uma confusão



Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))//fez um spread
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))//ele espera um JSON 


//Posso colocar varias promises dentro dele e se caso der certo ele eu chamo os meus then