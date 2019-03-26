import React from 'react'
import { colors } from '../../Styles'
import './Button.css'

const activeStyle = {
    borderColor: colors.primaryColor,
    color: colors.primaryColor,
}

const disabledStyle = {
    color: '#fff',
    borderColor: '#fff',
    opacity: .5,
    transform: 'none',
    boxShadow: 'none',
    cursor: 'initial'
}


const Button = props => {
    const style = props.disabled ? disabledStyle : activeStyle
    return (
        <button
            className='Button'
            {...props}
            style={{
                ...style,
                ...props.style
            }}
        >
            {props.children}
        </button>
    )
}



export default Button
