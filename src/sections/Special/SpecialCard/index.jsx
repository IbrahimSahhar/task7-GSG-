import React from 'react'
import './style.css'
const SpecialCard = ({ img, title, content }) => {
    return (
        <div className='special__card'>
            <img src={img} alt={title} srcset="" />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default SpecialCard