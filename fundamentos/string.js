const escola = "Cod3r"//começa contando do zero

console.log(escola.charAt(4))//vai me enviar o "4°" caractere
console.log(escola.charAt(7))//retorna vazio pq não tem o 7° caractere
console.log(escola.charCodeAt(3))//é um código relacionado a uma tabela ai
console.log(escola.indexOf('3'))//retorna o valor do inde 3 que eu coloquei

console.log(escola.substring(1))//ele vai imprimir apartir do indice 1 
console.log(escola.substring(0,3))//vai imprimir do indice 1 ao 3 sem incluir o 3°
console.log('Escola '.concat(escola).concat("!"))//essa é uma função que concatena
console.log(escola.replace(3,'e'))//substitui o valor que eu colocar pela a string

console.log('Ana,Maria,Pedro'.split(','))//apartir da virgula ele quebra as strings e cada umavira um array
