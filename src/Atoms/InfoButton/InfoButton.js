import React from 'react'
import { colors } from '../../Styles'
import './InfoButton.css'

const style = {
    borderColor: colors.primaryColor,
    color: colors.primaryColor,
}


const InfoButton = props => (
    <button
        className='InfoButton'
        {...props}
        style={{ ...style, ...props.style }}
    >
        {props.children}
    </button>
)



export default InfoButton
