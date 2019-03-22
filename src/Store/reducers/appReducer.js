const initialState = {
    transactions: [],
    popupView: ''
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
            console.log("IN UPDATE BALANCE.." + action.payload)
            // state.balanceAmount = action.payload
            // return { ...state }
            return { ...state, balanceAmount: action.payload }
        default:
            return state
    }
}