const initialState = {
    address: '',
    amount: 0.01
}

const changeSize = 0.01

// REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADDRESS_CHANGE':
            return { ...state, address: action.payload }
        case 'INCREASE':
            return { ...state, amount: state.amount + changeSize }
        case 'DECREASE':
            if (state.amount > changeSize)
                return { ...state, amount: state.amount - changeSize }
            else
                return { ...state }
        default:
            return state
    }
}