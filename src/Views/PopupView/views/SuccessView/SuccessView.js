import React from 'react'
import successIcon from './success.svg'
import { colors } from '../../../../Styles'
import './SuccessView.css'

const SuccessView = props => (
    <div className='SuccessView'>
        <img className='icon' src={successIcon} alt='' />
        <div className='text'>
            <div>
                Successfully Sent
                    <span
                    style={{
                        color: colors.primaryColor,
                        padding: '0px 10px'
                    }}>
                    {props.send.amount}
                </span>
                BTC
            </div>
            <div>
                To
                <span
                    style={{
                        color: colors.primaryColor,
                        padding: '0px 10px'
                    }}
                >
                    {props.send.address}
                </span>
            </div>
        </div>
    </div>
)

export default SuccessView