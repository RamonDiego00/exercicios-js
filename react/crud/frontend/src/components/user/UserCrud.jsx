import React { Component } from "react"
import Main from '../template/Main'
import { Component } from 'react'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle:'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}