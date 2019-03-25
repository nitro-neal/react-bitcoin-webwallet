import React from 'react'
import { Header, Transactions } from './components'
import InfoButton from '../../Atoms/InfoButton/InfoButton';
import './MainView.css'
import './TopInfoView.css'

const MainView = props => (
    <div className='MainView'>
        <Header {...props} />
        <Transactions {...props} />

        <div className='TopInfoView'>
            <InfoButton
                onClick={(e) => {
                    e.stopPropagation()
                    props.setPopup('info')
                }}
                >
                ?
            </InfoButton>
        </div>
            
    </div>
)

export default MainView