import React from 'react'
import loaderInnerB from './loader-inner-b.svg'
import loaderOuterCircle from './loader-outer-circle.svg'
import { colors } from '../../../../Styles'
import './LoadingView.css'

const LoadingView = props => (
    <div className='LoadingView'>
        <div className='logoWrap'>
            <img className='circle' src={loaderOuterCircle} alt='' />
            <img className='bitcoin' src={loaderInnerB} alt='' />
        </div>
        <div className='textWrap'>
            <div>
                Sending
                <span style={{ color: colors.primaryColor, padding: '0px 10px' }}>
                    {props.send.amount}
                </span>
                to
            </div>
            <div style={{ color: colors.primaryColor }} >{props.send.address}</div>
        </div>
    </div>
)

export default LoadingView