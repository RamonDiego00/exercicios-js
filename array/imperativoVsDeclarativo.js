const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//esta seguindo um passo a passo que não pode ser reutilizado e de dificil leitura 

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/ alunos.length)

// mais pratico pq eu posso reutilizar o código e facilita a leitura 

// select codigo, email nome from clietes where ativo = 1(exemplo de banco de dados)