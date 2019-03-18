import React from 'react'
import { SubTitle, CloseButton } from '../../Atoms'
import './ReceiveView.css'

const ReceiveView = props => (
    <div className='ReceiveView'>
        <CloseButton {...props} />
        <SubTitle>
            RECEIVE
        </SubTitle>
    </div>
)
export default ReceiveView