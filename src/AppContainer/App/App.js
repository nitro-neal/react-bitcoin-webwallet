import React, { Component } from 'react'
import { MainView, PopupView } from '../../Views'
import { connect } from 'react-redux'
import { MovingLogos } from './components'
import { createFingerprint } from '../../Store/actions'
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
    createFingerprint()
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

function mapDispatchToProps(dispatch) {
  return {
    pushTransaction: transaction => dispatch({
      type: 'PUSH_TRANSACTION',
      payload: transaction
    }),
    setPopup: popupView => dispatch({
      type: 'SET_POPUP',
      payload: popupView
    }),
    increaseSendAmount: () => dispatch({ type: 'INCREASE' }),
    decreaseSendAmount: () => dispatch({ type: 'DECREASE' })
  }
}

function mapStateToProps(state) {
  return { ...state }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
