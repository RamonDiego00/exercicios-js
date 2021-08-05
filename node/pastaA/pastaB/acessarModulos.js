const moduloA = require('../../moduloA')
//const moduloA = require('C:\Users\User\Desktop\exercicios-js\node\moduloA.js')
console.log(moduloA.ola)

//A cada "../" eu saio da pasta atual que eu estou

//Esse em comentário é um caminho absoluto

const c = require('./pastaC')
console.log(c.ol2)

/*const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) */