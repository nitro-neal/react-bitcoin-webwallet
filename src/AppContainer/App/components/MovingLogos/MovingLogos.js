import React from 'react'
import './MovingLogos.css'

const MovingLogos = props => (
    <div className='MovingLogos'>
        <div className="page-header header-filter">
            <div className="squares square1"></div>
            <div className="squares square2"></div>
            <div className="squares square3"></div>
            <div className="squares square4"></div>
            <div className="squares square5"></div>
            <div className="squares square6"></div>
            <div className="squares square7"></div>
            {props.children}
        </div>
    </div>
)

export default MovingLogos