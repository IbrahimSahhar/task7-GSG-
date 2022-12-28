import React from 'react'
import SpecialCard from './SpecialCard';
// images
import orangeJuiceImage from '../../images/orange-juice.png';
import chefImage from '../../images/chef.png';
import restaurantImage from '../../images/restaurant.png';

// style
import './style.css';
import SectionTitle from '../../components/SectionTitle';
import GridWithThreeColumns from '../../components/Columns';
const Special = () => {
    return (
        <div className='special'>
            <SectionTitle
                title="Special"
                subTitle="What makes us special"
                isCentered
            />

            <GridWithThreeColumns>
                <SpecialCard
                    img={orangeJuiceImage}
                    title="Fresh food"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras."
                />
                <SpecialCard
                    img={chefImage}
                    title="skilled Chef"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras."
                />
                <SpecialCard
                    img={restaurantImage}
                    title="Exotic dishes"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras."
                />
            </GridWithThreeColumns>
        </div>
    )
}

export default Special