import React from 'react'
import { Button } from '../../Atoms'
import { colors } from '../../Styles'
import './Header.css'

const styles = {
    balance: {
        color: colors.primaryColor
    }
}

const Header = props => (
    <header className="Header">
        <div className='category'>
            Bitcoin Test
        </div>
        <div className='balance' style={styles.balance} >
            0 BTCT
        </div>
        <div className='buttonsWrap'>
            <Button> Send </Button>
            <Button> Receive </Button>
        </div>
    </header>
)

export default Header