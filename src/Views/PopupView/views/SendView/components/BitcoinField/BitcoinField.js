import React, { Component } from 'react'
// import { increase, decrease } from '../../../../../../Assets'
import { colors } from '../../../../../../Styles'
import './BitcoinField.css'

class BitcoinField extends Component {

    input = React.createRef()

    // onFocus() {
    //     this.setState({ focus: true })
    // }

    onBlur(e) {
        const { value } = e.target
        if (!value)
            this.props.setSendAmount(0)
    }

    onChange(e) {
        const { value } = e.target
        if (!isNaN(value))
            this.props.setSendAmount(value)
    }

    render() {
        // const { increaseSendAmount, decreaseSendAmount } = this.props
        return (
            <div className={`BitcoinField`} style={{ color: colors.primaryColor }}>
                {/* <div className='decrease' onClick={decreaseSendAmount}>
                    <img src={decrease} alt='' />
                </div> */}
                <div className='textWrap'>
                    <div className='amount'>
                        <input
                            value={this.props.send.amount}
                            onChange={this.onChange.bind(this)}
                            onBlur={this.onBlur.bind(this)}
                        />
                    </div>
                    <div className='coin'>
                        BTCT
                    </div>
                </div>
                {/* <div className='increase' onClick={increaseSendAmount}>
                    <img src={increase} alt='' />
                </div> */}
            </div>
        )
    }
}

export default BitcoinField