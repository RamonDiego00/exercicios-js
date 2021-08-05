let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//vai transformar o number em boolean//não,não isativo,ele vira verdadeiro

console.log('os verdadeiros...')
console.log(!!3)//o !! força a ser vdd
console.log(!!-1)
console.log(!!' ')//string//espaço em branco
console.log(!![])//array
console.log(!!{})//objeto direto
console.log(!!Infinity)
console.log(!!(isAtivo = true))//ele vai pegar o valor atribuido e transformar em boolean

console.log('os falsos...')
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('pra finalizar...')
console.log(!!('' || null || ' '))//vai seguir a logica das canetas 
console.log(('' || null || ' '))//vai imprimir só os valores válidos

let nome =''//let nome = 'lucas'//vai retornar lucas
console.log(nome || 'desconhecido')//caso o campo esteja vazio ele vai retornar desconhecido 
