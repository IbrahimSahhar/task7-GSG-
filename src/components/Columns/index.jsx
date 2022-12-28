import React from 'react'

import './style.css';
const Columns = ({ children }) => {
    return (
        <div className='grid-with-three-columns'>{
            children
        }</div>
    )
}

export default Columns