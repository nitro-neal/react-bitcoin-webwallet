const initialState = {
    transactions: [],
    popupView: null
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
        default:
            return state
    }
}