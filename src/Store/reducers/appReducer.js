const initialState = {
    transactions: [],
    popupView: '',
    balanceAmount: 0
}

// REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case 'PUSH_TRANSACTION':
            state.transactions.push(action.payload)
            return { ...state }
        case 'SET_POPUP':
            state.popupView = action.payload
            return { ...state }
        case 'UPDATE_BALANCE':
            return { ...state, balanceAmount: action.payload }
        case 'UPDATE_RECEIVE_ADDRESS':
            return { ...state, receiveAddress: action.payload }
        case 'UPDATE_FINGERPRINT':
            console.log("IN UPDATE_FINGERPRINT .." + action.payload)
            return { ...state, fingerprint: action.payload }
        default:
            return state
    }
}