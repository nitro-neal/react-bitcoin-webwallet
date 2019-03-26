import React from 'react'
import { colors } from '../../../../Styles'
import { Button } from '../../../../Atoms'
import { Title, CloseButton } from '../../atoms'
import './InfoView.css'
import DonateAddress from '../../../../Assets/donate.png'

const InfoView = props => (
    <div className='InfoView'>
        <CloseButton {...props} />

        <Title>
            WHAT THE @#!$?
        </Title>
        <div className='text-body-wrap'>
            <div className='sub-title'>
                Bitcoin Testnet Faucet and Wallet
        </div>

            <div className=''>
                No passwords, No login, No extra steps.
        </div>
            <div>
                <img className='donateAddress' src={DonateAddress} alt="donate" />
            </div>

            <div style={{
                color: colors.primaryColor
            }}>
                BTC: 1FahKfPv46hC6WE7ufPKfQWnknrtsQUYS1
        </div>

            <div>Contribute to help us continue to improve the crypto ecosystem</div>
        </div>


        <Button
            style={{
                display: 'block',
                margin: '0px auto 0px',
                maxWidth: 300,
                height: 50,
            }}
            onClick={() => {
                props.setPopup(null)
            }}
        >
            OK

        </Button>

        <div></div>
    </div>
)

export default InfoView