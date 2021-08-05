const obj = { a:1, b:2 , c:3, soma() { return a + b + c}}
console.log(ON.strJSingify(obj))
//assim que eu falo que quero converter um obj em json


console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
//assim que eu falo que eu quero coverter um json e obj

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true,"d":{},"e": []}'))
//aceita qualquer tipo dentro dele

//console.log(JSON.parse('{ "a":'/string/'}')) essa barra(scape)quer dizer que aquela aspas simples não esta fechando
