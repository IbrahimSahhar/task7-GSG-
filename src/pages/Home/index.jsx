import React from 'react'
import OutsideSpace from "../../components/outsideSpace"
import About from '../../sections/About'
import Blogs from '../../sections/Blogs'
import CookingIngredients from '../../sections/CookingIngredients'
import Copyright from '../../sections/Copyright'
import Discount from '../../sections/Discount'
import Footer from '../../sections/Footer'
import Header from '../../sections/Header'
import Newsletter from '../../sections/Newsletter'
import Statistics from '../../sections/Numbers'
import Reviews from '../../sections/Reviews'
import Special from '../../sections/Special'
import StraightFromKitchen from '../../sections/StraightFromKitchen'

const Home = () => {
    return (
        <main>
            <Header />
            <OutsideSpace>
                <About />
                <Special />
                <StraightFromKitchen />
                <Discount />
                <CookingIngredients />
                <Statistics  />
                <Reviews />
                <Blogs />
                <Footer />
                <Newsletter />
                <Copyright />
            </OutsideSpace>
        </main>
    )
}

export default Home