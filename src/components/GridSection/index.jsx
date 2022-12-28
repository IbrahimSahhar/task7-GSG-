import React from 'react'
import Button from '../Button'
import Container from '../Container'
import SectionTitle from '../SectionTitle'

import './style.css'
const GridSection = ({ title, shortDesc, desc, img }) => {
    return (
        <div className='grid-section'>
            <Container>
                <div className="grid-section__content">
                    <div>
                        <SectionTitle title={title} subTitle={shortDesc} />
                        <p className="grid-section__desc">{desc}</p>
                        <Button>Read more</Button>
                    </div>
                    <div className='grid-section__image_container'>
                        <img src={img} alt="grid section Image" />
                    </div>
                </div>
            </Container>
        </div>)
}

export default GridSection