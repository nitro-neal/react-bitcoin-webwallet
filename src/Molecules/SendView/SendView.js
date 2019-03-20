import React from 'react'
import { SubTitle, CloseButton, Button, TextField, BitcoinField } from '../../Atoms'
import './SendView.css'

const SendView = props => (
    <div className='SendView'>
        <CloseButton {...props} />
        <div className='content'>
            <div className='subTitleWrap'>
                <SubTitle>
                    SEND
            </SubTitle>
            </div>
            <div className='fieldsWrap'>
                <TextField />
                <BitcoinField {...props} />
            </div>
            <Button
                style={{
                    display: 'block',
                    margin: 'auto auto 20px',
                    height: window.innerWidth > 800 ? 60 : 50,
                    width: window.innerWidth > 800 ? 300 : 280
                }}
                onClick={() => {
                    props.pushTransaction({ method: 'sent' })
                    props.setPopup(null)
                }}
            >
                SEND
            </Button>

        </div>
    </div>
)

export default SendView