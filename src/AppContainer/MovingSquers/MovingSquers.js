import React from 'react'
import './MovingSquers.css'

const MovingSquers = props => (
    <div className='MovingSquers'>
        <div class="index-page">
            <div class="wrapper">
                <div class="page-header header-filter">
                    <div class="squares square1"></div>
                    <div class="squares square2"></div>
                    <div class="squares square3"></div>
                    <div class="squares square4"></div>
                    <div class="squares square5"></div>
                    <div class="squares square6"></div>
                    <div class="squares square7"></div>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
)

export default MovingSquers