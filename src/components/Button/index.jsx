import React from 'react'

import './style.css';
const Button = ({ children, secondary, fullHeight, large, className, style }) => {
    return (
        <button
            style={style || {}}
            className={`my-button 
            ${secondary ? "my-button-secondary" : ""} 
            ${fullHeight ? "h-100" : ""}
            ${large ? "my-button-large" : ""}
            ${className ? className : ""} 
            `}> {children}</button >
    )
}

export default Button