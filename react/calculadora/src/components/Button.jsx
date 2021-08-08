import React from 'react';
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>

    )
}
//Nas propriedades do meu botão eu coloquei tudo o que tá dentro de props e inclui a função onClick