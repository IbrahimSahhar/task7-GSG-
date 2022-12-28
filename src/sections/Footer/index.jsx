import React from 'react'
import Container from '../../components/Container'
import GridWithThreeColumns from '../../components/Columns'
import Logo from '../../components/Logo'

// images
import instgram from '../../images/instgram.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/youtube.png'
import email from '../../images/email.png'
import gps from '../../images/gps.png'
import phone from '../../images/phone.png'

import './style.css'
const Footer = () => {
    return (
        <footer>
            <Container>
                <GridWithThreeColumns>
                    <div className='footer-1'>
                        <div className='footer-1__header'>
                            <Logo />
                            <p>Golden View Dine</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin</p>
                        <div className='social__icons'>
                            <img src={instgram} alt="instgram" />
                            <img src={twitter} alt="twitter" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                    <div className='footer-2'>
                        <p className="footer__title">Other Links</p>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>Blogs</li>
                            <li>our team</li>
                            <li>Our kitchen</li>
                        </ul>
                    </div>
                    <div className='footer-3'>
                        <p className="footer__title">Contact Us</p>
                        <p>
                            <img src={email} alt="email" /> Gogreendineservice@gmail.com
                        </p>
                        <p>
                            <img src={gps} alt="gps" /> AZ complex bylane3 Mandari Rd Mumbai 1100867
                        </p>
                        <p>
                            <img src={phone} alt="email" /> +1800 287 256
                        </p>
                    </div>
                </GridWithThreeColumns>
            </Container>
        </footer>
    )
}

export default Footer