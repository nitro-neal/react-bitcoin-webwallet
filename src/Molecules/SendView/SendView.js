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
                    margin: '50px auto 0px',
                    height: 60,
                    width: 300
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