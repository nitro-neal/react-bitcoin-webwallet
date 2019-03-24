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
                props.setPopup(null)
            }}
        >
            DONE
            
        </Button>

        <div style={{ textAlign: "center", margin:  '50px auto 0px'}} >
            <h2>Receive Address:</h2>
            <h1>{props.app.receiveAddress}</h1>
            {/* TODO: ADD QR */}
            {/* <div>{props.app.transactions[0].qrcode}</div> */}
            {/* <span dangerouslySetInnerHTML={{__html: props.app.transactions[0]}} /> */}
            <br></br>
        </div>
        
        <div></div>
    </div>
)

export default ReceiveView