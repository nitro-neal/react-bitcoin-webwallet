import React, { Component } from 'react'
import { increase, decrease } from '../../../../../../Assets'
import { colors } from '../../../../../../Styles'
import './BitcoinField.css'

class BitcoinField extends Component {

    state = {
        focus: null,
    }

    input = React.createRef()

    onFocus() {
        this.setState({ focus: true })
    }

    onBlur() {
        if (!this.state.value)
            this.setState({ focus: false })
    }

    onChange(e) {
        const { value } = e.target
        if (!isNaN(value))
            this.setState({
                value: value
            })
    }

    render() {
        const { increaseSendAmount, decreaseSendAmount } = this.props
        return (
            <div className={`BitcoinField ${this.state.focus ? 'focused' : ''}`} style={{ color: colors.primaryColor }}>
                <div className='decrease' onClick={decreaseSendAmount}>
                    <img src={decrease} alt='' />
                </div>
                <div className='textWrap'>
                    <div className='amount'>
                        {Math.round(this.props.send.amount * 10000) / 10000}
                    </div>
                    <div className='coin'>
                        BTCT
                    </div>
                </div>
                <div className='increase' onClick={increaseSendAmount}>
                    <img src={increase} alt='' />
                </div>
            </div>
        )
    }
}

export default BitcoinField