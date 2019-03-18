import React from 'react'
import { SubTitle, CloseButton, Button } from '../../Atoms'
import './ReceiveView.css'

const ReceiveView = props => (
    <div className='ReceiveView'>
        <CloseButton {...props} />
        <SubTitle>
            RECEIVE
        </SubTitle>

        <Button
            style={{
                display: 'block',
                margin: '50px auto 0px'
            }}
            onClick={() => {
                props.pushTransaction({ method: 'received' })
                props.setPopup(null)
            }}
        >
            RECEIVE
        </Button>
    </div>
)

export default ReceiveView