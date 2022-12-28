import React from 'react'

import './style.css';

const Statistics = ({ img, number, title }) => {
    return (
        <div className='number-card'>
            <img src={img} alt={title} className="number-card__img" />
            <div>
                <h2>{number}</h2>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Statistics