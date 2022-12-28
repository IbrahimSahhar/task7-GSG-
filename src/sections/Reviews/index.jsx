import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ReviewCard from './ReviewCard'
// images
import avatar1 from '../../images/avatar1.png'
import './style.css'
const Reviews = () => {
    return (
        <div className='reviews'>
            <SectionTitle title="Reviews" subTitle={"words from our food lovers"} isCentered />
            <div className="reviews__container">
                <ReviewCard
                    avatar={avatar1}
                    name="Alex andrina"
                    stars={5}
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit."
                />

                <ReviewCard
                    avatar={avatar1}
                    name="Alex andrina"
                    stars={5}
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit."
                />

                <ReviewCard
                    avatar={avatar1}
                    name="Alex andrina"
                    stars={5}
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit."
                />
            </div>
        </div>
    )
}

export default Reviews