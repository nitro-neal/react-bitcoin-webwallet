import React from 'react'
import App from './App/App'
import { Provider } from 'react-redux'
import store from '../Store'

const AppContainer = props => (
    <Provider store={store}>
        <div className="AppContainer">
            <App />
        </div>
    </Provider>
)

export default AppContainer