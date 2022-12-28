import React from 'react'
import Button from '../../components/Button'
import Container from '../../components/Container'
import SectionTitle from '../../components/SectionTitle'
import discountImage from '../../images/discount.png'
import './style.css'
const Discount = () => {
    return (
        <div className='discount'>
            <Container>
                <img src={discountImage} alt="discount" className="left" />
                <div className="title__container" >
                    <SectionTitle
                        title="Come join us for a lunch this weekend and enjoy"
                        subTitle="FLAT 10% OFF"
                        isCentered
                    />
                </div>
                <Button style={{ display: 'block', margin: 'auto' }}>Book Table</Button>
                <img src={discountImage} alt="discount" className="right" />
            </Container>
        </div>
    )
}

export default Discount