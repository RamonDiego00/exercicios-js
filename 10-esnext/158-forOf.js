for (let letra of "Cod3r") {
    console.log(letra)
}//vai percorrer letra por letra

const assuntosEcma = ['Map','Set','Promise']

for (let i in assuntosEcma) {
    console.log(i)
}//for in para indice

for (let assunto of assuntosEcma) {
    console.log(assunto)
}//vai percorrer os valores

const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promise',{abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//Usando o destructing para percorrer separado

for(let[ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}