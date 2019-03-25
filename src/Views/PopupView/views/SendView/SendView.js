import React from 'react'
import { BitcoinField } from './components'
import { Button, TextField } from '../../../../Atoms'
import { Title, CloseButton } from '../../atoms'

import './SendView.css'

var theAddress = "-1"
var urlprefix = "http://104.196.50.29:8080/";
//var urlprefix = "http://localhost:8080/";

function sendCoins(fp, amount){
    var data = JSON.stringify({"amount": amount, "address": theAddress});

    fetch(urlprefix + 'sendCoins', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Fingerprint': fp
        },
        body: data,
      }).then(function(response) {
          console.log(response.status);
      }, function(error) {
          console.log(error.message);
      });
}



function setSendAddress(address) {
    theAddress = address
}

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
                {/* TOOD: Fix this setSendAddress fucntion pass hack! */}
                <TextField {...props} setSendAddress={setSendAddress}/>
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
                    props.setPopup(null)
                    sendCoins(props.app.fingerprint, props.send.amount)
                }}
            >
                SEND
            </Button>

        </div>
    </div>
)

export default SendView