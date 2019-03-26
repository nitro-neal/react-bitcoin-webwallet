import createFingerprint from './createFingerprint'
import sendCoins from './sendCoins'
import store from '../index'

export { createFingerprint }
export { sendCoins }

export const pushTransaction = transaction => store.dispatch({
    type: 'PUSH_TRANSACTION',
    payload: transaction
})

export const setPopup = popupView => store.dispatch({
    type: 'SET_POPUP',
    payload: popupView
})

export const setBalanceAmount = amount => store.dispatch({
    type: 'UPDATE_BALANCE',
    payload: amount
})

export const setReceiveAddress = address => store.dispatch({
    type: 'UPDATE_RECEIVE_ADDRESS',
    payload: address
})

export const setFingerprint = fingerprint => store.dispatch({
    type: 'UPDATE_FINGERPRINT',
    payload: fingerprint
})

export const increaseSendAmount = () => store.dispatch({ type: 'INCREASE' })

export const decreaseSendAmount = () => store.dispatch({ type: 'DECREASE' })

export const setSendAmount = (value) => store.dispatch({
    type: 'SET_SEND_AMOUNT',
    payload: value
})

export const setAddress = address => store.dispatch({
    type: 'ADDRESS_CHANGE',
    payload: address
})
