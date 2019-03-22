import React, { Component } from 'react'
import { Button } from '../../../../Atoms'
import { colors } from '../../../../Styles'
import './Header.css'

const styles = {
    balance: {
        color: colors.primaryColor
    }
}

class Header extends Component {
    state = {
        className: ''
    }

    componentDidMount() {
        this.setState({ className: 'fadeInDown' })
        this.setState({ balanceAmount: '0' })
    }
    
    render() {
        const { props } = this
        return (
            <header className={`Header ${this.state.className}`}>
                <div className='category'>
                    Bitcoin Test
                </div>
                <div className='balance' style={styles.balance} >
                    {this.state.balanceAmount} BTCT
                    {/* {this.props.balanceAmount}
                    {this.props.appReducer.balanceAmount}
                    {this.props.send.balanceAmount} */}
                </div>
                <div className='buttonsWrap'>
                    <Button
                        onClick={(e) => {
                            e.stopPropagation()
                            props.setPopup('send')
                        }}
                    >
                        Send
                 </Button>
                    <Button
                        onClick={(e) => {
                            e.stopPropagation()
                            props.setPopup('receive')
                        }}
                    >
                        Receive
                 </Button>
                </div>
            </header>
        )
    }
}

export default Header