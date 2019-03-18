import React from 'react'
import { Header, Transactions } from '../../Molecules'
import './MainView.css'

const MainView = props => (
    <div className='MainView'>
        <Header {...props} />
        <Transactions {...props} />
    </div>
)

export default MainView