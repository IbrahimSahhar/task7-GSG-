import React from 'react'
import GridSection from '../../components/GridSection'

import image from '../../images/cooking-ingredients.png'
const CookingIngredients = () => {
    return (
        <GridSection
            title="Cooking ingredients"
            shortDesc="What goes in"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit."
            img={image} />
    )
}

export default CookingIngredients