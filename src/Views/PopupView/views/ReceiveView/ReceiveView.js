import React from 'react'
import { Button } from '../../../../Atoms'
import { Title, CloseButton } from '../../atoms'
import { colors } from '../../../../Styles'
import './ReceiveView.css'

import QrCode from 'qrcode-generator'

function renderQr(receiveAddress) {
    if (receiveAddress) {
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



        <div className='textWrap'>
            <div className='addressTitle'>Address:</div>
            <div style={{ color: colors.primaryColor }} className='address'>{props.app.receiveAddress}</div>
            <span dangerouslySetInnerHTML={{ __html: renderQr(props.app.receiveAddress) }} />
            <br></br>
        </div>


        <Button
            style={{
                display: 'block',
                margin: window.innerWidth < 800 ? 20 : '50px auto 0px',
                width: window.innerWidth < 800 ? 'calc(100% - 40px)': '100%'
            }}
            onClick={() => {
                props.setPopup(null)
            }}
        >
            DONE

        </Button>
    </div>
)

export default ReceiveView