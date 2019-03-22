import React from 'react'
import { Button } from '../../../../Atoms'
import { Title, CloseButton } from '../../atoms'
import './ReceiveView.css'

const ReceiveView = props => (
    <div className='ReceiveView'>
        <CloseButton {...props} />
        <Title>
            RECEIVE
        </Title>

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