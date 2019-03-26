import React from 'react'
import { BitcoinField } from './components'
import { Button, TextField } from '../../../../Atoms'
import { Title, CloseButton } from '../../atoms'
import { colors } from '../../../../Styles'
import { setAddress } from '../../../../Store/actions'

import './SendView.css'

const SendView = props => (
    <div className='SendView'>
        <CloseButton {...props} />
        <div className='content'>
            <div className='TitleWrap'>
                <Title>
                    SEND
                </Title>
            </div>
            <div className='fieldsWrap'>
                <TextField {...props} value={props.send.address} setSendAddress={setAddress} />
                <BitcoinField {...props} />

                {/* TODO: Mabye add before they hit send or something .. 'A .00001 transaction fee will be added to every transaction' */}
            </div>

            {/* TODO: Disable button if amount not enough coins, OR if invalid address format */}
            <Button
                style={{
                    display: 'block',
                    margin: 'auto auto 20px',
                    height: window.innerWidth > 800 ? 60 : 50,
                    width: window.innerWidth > 800 ? 300 : 280
                }}
                onClick={() => {
                    // TODO: Better validation and display error / disable button
                    if (props.send.amount && props.send.address)
                        props.setPopup('confirmation')
                    else
                        alert('Please fill up an amount and a valid address')
                }}
            >
                SEND
            </Button>

        </div>
    </div>
)

export default SendView