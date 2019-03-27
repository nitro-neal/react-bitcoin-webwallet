const initialState = {
    address: '',
    amount: 0.00001
}

const changeSize = 0.00001

// REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADDRESS_CHANGE':
            return { ...state, address: action.payload }
        case 'INCREASE':
            const amount = Math.round((state.amount + changeSize) * 100000) / 100000
            return {
                ...state,
                amount
            }
        case 'DECREASE':
            if (state.amount > changeSize) {
                const amount = Math.round((state.amount - changeSize) * 100000) / 100000
                return {
                    ...state,
                    amount
                }
            }
            else
                return { ...state }
        case 'SET_SEND_AMOUNT':
            return { ...state, amount: action.payload }
        default:
            return state
    }
}