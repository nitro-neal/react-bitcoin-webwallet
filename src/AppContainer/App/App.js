import React from 'react'
import { MainView, Popup } from '../../Organisms'
import { connect } from 'react-redux'
import { colors } from '../../Styles'
import './App.css'

const styles = {
  App: {
    backgroundColor: colors.backgroundDark,
    color: colors.textLight
  }
}

const App = props => (
  <div style={styles.App}>
    <div
      className={`App ${props.app.popupView ? 'dark' : ''}`}
    >
      <MainView {...props} />
    </div>
    <Popup {...props} />
  </div>
)

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
