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
    }
    
    render() {
        const { props } = this
        return (
            <header className={`Header ${this.state.className}`}>
                <div className='category'>
                    Bitcoin Test
                </div>
                <div className='balance' style={styles.balance} >
                    {props.app.balanceAmount} BTCT
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