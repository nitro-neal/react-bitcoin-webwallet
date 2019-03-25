import React from 'react'
import { Button } from '../../../../Atoms'
import { Title, CloseButton } from '../../atoms'
import './InfoView.css'
import DonateAddress from'../../../../Assets/donate.png';

const InfoView = props => (
    <div className='InfoView'>
        <CloseButton {...props} />
        <Title>
            What The @#!$?
        </Title>

    

        <div style={{ textAlign: "center", margin:  '50px auto 0px'}} >
            
            <h3>Bitcoin Testnet Faucet and Wallet</h3>
            <p> No passwords, No login, No extra steps. </p>
            <br></br>
            <br></br>
            <img  src={DonateAddress} alt="donate"/>
            <p>BTC: 1FahKfPv46hC6WE7ufPKfQWnknrtsQUYS1</p>

            <h5>Contribute to help us continue to improve the crypto ecosystem</h5>
        </div>


        <Button
            style={{
                display: 'block',
                margin: '50px auto 0px'
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