import React, { Component } from 'react';

// images
import search from '../../images/search.png'
import lines from '../../images/lines.svg'

import Button from '../Button'

// style
import './index.css'
import Logo from '../Logo';


class Nav extends Component {
    state = {
        isNavShown: false
    }

    toogleNav = () => {
        this.setState({ isNavShown: !this.state.isNavShown })
    }

    render() {
        return (
            <nav className='nav'>
                <div>
                    <Logo />
                    <ul className="nav__ul only-large-screens">
                        <li className="nav__li"><a href="/#">Home</a></li>
                        <li className="nav__li"><a href="/#">About Us</a></li>
                        <li className="nav__li"><a href="/#">Special</a></li>
                        <li className="nav__li"><a href="/#">Menu</a></li>
                        <li className="nav__li"><a href="/#">Blogs</a></li>
                        <li className="nav__li">
                            <img src={search} alt="search" />
                        </li>
                    </ul>
                    <button className='only-mobile toogle-nav' onClick={this.toogleNav}>
                        <img src={lines} alt="lines" />
                    </button>
                </div>
                {
                    this.state.isNavShown &&
                    <ul className="nav__ul__mobile only-mobile">
                        <li className="nav__li" onClick={this.toogleNav}><a href="/#">Home</a></li>
                        <li className="nav__li" onClick={this.toogleNav}><a href="/#">About Us</a></li>
                        <li className="nav__li" onClick={this.toogleNav}><a href="/#">Special</a></li>
                        <li className="nav__li" onClick={this.toogleNav}><a href="/#">Menu</a></li>
                        <li className="nav__li" onClick={this.toogleNav}><a href="/#">Blogs</a></li>
                    </ul>}
                <Button className="only-large-screens" secondary fullHeight>Book Now</Button>
            </nav>
        );
    }
}

export default Nav;
