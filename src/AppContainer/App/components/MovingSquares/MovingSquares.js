import React from 'react'
import './MovingSquares.css'

const MovingSquares = props => (
    <div className='MovingSquares'>
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

export default MovingSquares