export default function Cabecalho(props) {
    // props é só leitura, não pode editar
    return(
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}''