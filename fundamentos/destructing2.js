const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5, n6=0] = [10,7,9,8]//meio que atribui valores a esse array
console.log(n1,n3,n5,6)

const [,[,nota]] = [[, 8, 8],[9,6,8]]//coloquei um array dentro de outro array e depois adicionei valores com outros arrays pulando componentes 
console.log(nota)