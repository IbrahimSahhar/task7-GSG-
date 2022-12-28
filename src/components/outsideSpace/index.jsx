import React from 'react'
import './style.css'
const outsideSpace = ({ children }) => {
    return (
        <div className="space">
            {children}
        </div>
    )
}

export default outsideSpace