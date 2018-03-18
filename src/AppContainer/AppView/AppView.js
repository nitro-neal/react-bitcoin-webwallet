import React, { Component } from 'react'
import { Header, Transactions } from '../../Molecules'
import { colors } from '../../Styles'
import './AppView.css'

const styles = {
  AppView: {
    backgroundColor: colors.backgroundDark,
    color: colors.textLight
  }
}

class App extends Component {
  render() {
    return (
      <div
        className='AppView'
        style={styles.AppView}
      >
        <div className='appWrap'>
          <Header />
          <Transactions />
        </div>
      </div>
    );
  }
}

export default App
