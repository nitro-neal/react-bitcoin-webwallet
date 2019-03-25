import React from 'react'
import { Button } from '../../../../Atoms'
import { Title, CloseButton} from '../../atoms'
import './ReceiveView.css'

import QrCode from 'qrcode-generator'

function renderQr(receiveAddress) {
    if(receiveAddress) {
        var qrSize = 4;
        var typeNumber = 4;
        var errorCorrectionLevel = 'L';
        var qr = QrCode(typeNumber, errorCorrectionLevel);
        qr.addData(receiveAddress);
        qr.make();
        return qr.createImgTag(qrSize, qrSize * 4);
    }
}
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
            <span dangerouslySetInnerHTML={{__html: renderQr(props.app.receiveAddress)}} />
            <br></br>
        </div>
        
        <div></div>
    </div>
)

export default ReceiveView