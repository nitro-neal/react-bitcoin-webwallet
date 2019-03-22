import React, { Component } from 'react'
import { MainView, PopupView } from '../../Views'
import { connect } from 'react-redux'
import { MovingLogos } from './components'
import {
  createFingerprint,
  pushTransaction,
  setPopup,
  setBalanceAmount,
  increaseSendAmount,
  decreaseSendAmount
} from '../../Store/actions'
import { colors } from '../../Styles'
import './App.css'

const styles = {
  App: {
    backgroundColor: colors.backgroundDark,
    color: colors.textLight
  }
}

class App extends Component {
  componentDidMount() {
    createFingerprint(this)
  }

  render() {
    const { props } = this
    return (
      <MovingLogos>
        <div style={styles.App}>
          <div
            className={`App ${props.app.popupView ? 'dark' : ''}`}
          >
            <MainView {...props} />
          </div>
          <PopupView {...props} />
        </div>
      </MovingLogos>
    )
  }
}

function mapDispatchToProps() {
  return {
    pushTransaction,
    setPopup,
    setBalanceAmount,
    increaseSendAmount,
    decreaseSendAmount
  }
}

function mapStateToProps(state) {
  return { ...state }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
