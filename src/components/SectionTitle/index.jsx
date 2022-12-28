import React from 'react'
import './style.css'
const SectionTitle = ({ title, subTitle, isCentered }) => {
    return (
        <>
            <h2 className="title" style={{ textAlign: isCentered ? "center" : "start" }}>{title}</h2>
            <p className="sub-title" style={{ textAlign: isCentered ? "center" : "start" }}>
                {subTitle}
            </p>
        </>
    )
}

export default SectionTitle