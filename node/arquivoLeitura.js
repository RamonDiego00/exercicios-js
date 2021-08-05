const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sicrono
const conteudo = fs.readFileSync(caminho, 'utf-8')//assim ler de forma sincrona

console.log(conteudo)

//assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
//esse é melhor
const config = require('./arquivo.json')
console.log(config.db)

//para ler pastas

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Coteudo da pasta ...')
    console.log(arquivos)
})
