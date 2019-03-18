import React from 'react'
import { SubTitle, CloseButton, Button } from '../../Atoms'
import './SendView.css'

const SendView = props => (
    <div className='SendView'>
        <CloseButton {...props} />
        <SubTitle>
            SEND
            </SubTitle>
        <Button
            style={{
                display: 'block',
                margin: '50px auto 0px'
            }}
            onClick={() => {
                props.pushTransaction({ method: 'sent' })
                props.setPopup(null)
            }}
        >
            SEND
        </Button>
    </div>
)


export default SendView