import React from 'react'
import Container from '../../components/Container'

import email from '../../images/email2.png'


import './style.css';
import Button from '../../components/Button';
const Newsletter = () => {
    return (
        <Container>
            <div className='newsletter'>
                <p>
                    <img src={email} alt="email" /> Subscribe to our Newsletter
                </p>
                <input type="text" placeholder='Your Email id' />
                <Button>Subscribe</Button>
            </div>
        </Container>
    )
}

export default Newsletter