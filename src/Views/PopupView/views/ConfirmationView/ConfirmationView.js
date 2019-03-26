import React from 'react'
import { Button } from '../../../../Atoms'
import { Title, CloseButton } from '../../atoms'
import { colors } from '../../../../Styles'
import { sendCoins } from '../../../../Store/actions'
import './ConfirmationView.css'


const ConfirmationView = props => (
    <div className='ConfirmationView'>
        <CloseButton {...props} />
        <div className='titleHint' style={{ color: colors.primaryColor }}>Are You Sure You Want to</div>
        <Title style={{
            letterSpacing: '1px'
        }}>
            Send {props.send.amount} BTCT?
        </Title>

        <div className='valuesWrap'>
            <div className='row'>
                <div className='key'>
                    Sending:
                </div>
                <div className='value btc' style={{ color: colors.primaryColor }} >
                    {props.send.amount} BTCT
                </div>
            </div>
            <div className='row'>
                <div className='key'>
                    Address:
                </div>
                <div className='value' style={{ color: colors.primaryColor }}>
                    {props.send.address}
                </div>
            </div>
        </div>

        <div className='buttonsWrap'>
            <Button
                style={{ color: '#fff', borderColor: '#fff', opacity: .5 }}
                onClick={() => props.setPopup('send')}
            >
                BACK
            </Button>
            <Button
                onClick={async () => {
                    props.setPopup('loading')

                    const response = await sendCoins(props.app.fingerprint, props.send.amount)
                    if (response) {
                        console.log(response)
                        props.setPopup('success')
                        setTimeout(() => props.setPopup(null), 2000)
                    }
                    else
                        console.error(response)
                }}
            >
                SEND
            </Button>
        </div>

    </div>
)

export default ConfirmationView