import React from 'react'
import { colors } from '../../Styles'
import './Button.css'

const style = {
    borderColor: colors.primaryColor,
    color: colors.primaryColor,
}


const Button = props => (
    <button
        className='Button'
        {...props}
        style={{ ...style, ...props.style }}
    >
        {props.children}
    </button>
)



export default Button
