import React from 'react'
import './Title.css'

const Title = props => (
    <div className='Title' {...props}>
        {props.children}
    </div>
)

export default Title