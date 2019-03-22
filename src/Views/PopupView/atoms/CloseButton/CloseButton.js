import React from 'react'
import { close } from '../../../../Assets'
import './CloseButton.css'

const CloseButton = props => (
    <div
        className='CloseButton'
        onClick={() => props.setPopup(null)}
    >
        <img src={close} alt='' />
    </div>
)

export default CloseButton