import React from 'react'
import { SubTitle, CloseButton } from '../../Atoms'
import './SendView.css'

const SendView = props => (
    <div className='SendView'>
        <CloseButton {...props} />
        <SubTitle>
            SEND
        </SubTitle>
    </div>
)

export default SendView