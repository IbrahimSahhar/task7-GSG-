import React from 'react'
import GridWithThreeColumns from '../../components/Columns'
import SectionTitle from '../../components/SectionTitle'
import BlogsCard from './BlogsCard'

// images
import blog1image from '../../images/blog1.png'
import blog2image from '../../images/blog2.png'
import blog3image from '../../images/blog3.png'

import './style.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <SectionTitle title={"Blogs"} subTitle="words from our food lovers" isCentered />
            <GridWithThreeColumns>
                <BlogsCard
                    img={blog1image}
                    title="Cooking Dining Experience"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin"
                />
                <BlogsCard
                    img={blog2image}
                    title="Cooking Dining Experience"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin"
                    imgLast
                />
                <BlogsCard
                    img={blog3image}
                    title="Cooking Dining Experience"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin"
                />
            </GridWithThreeColumns>
        </div>
    )
}

export default Blogs