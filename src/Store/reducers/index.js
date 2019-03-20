import { combineReducers } from 'redux'
import appReducer from './appReducer'
import sendReducer from './send'


export default combineReducers({
    app: appReducer,
    send: sendReducer
})
