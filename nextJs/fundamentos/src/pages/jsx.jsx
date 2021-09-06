export default function Jsx() {
const titulo = <h1>JSX é um conceito Central</h1>

function substitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>
}
    return(
        <div>
            {titulo}
            {substitulo}
            <p>
                {JSON.stringify({nome: 'João', idade: 30})}
            </p>
        </div>
    )
}

// Posso armazenar trechos JSX dentro de variaveis js
// Tambem posso chamar variaveis e funções dentro do meu JSX 