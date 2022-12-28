import React from 'react'
import GridWithThreeColumns from '../../components/Columns'
import Number from './Statistics'

// images
import dish from '../../images/dish.png'
import chef from '../../images/chef.png'
import team from '../../images/team.png'
import Container from '../../components/Container'

import './style.css'

const Statistics = () => {
    return (
        <div className="numbers">
            <Container>
                <GridWithThreeColumns>
                    <Number
                        img={dish}
                        number={"250+"}
                        title="Delicacy"
                    />
                    <Number
                        img={chef}
                        number={"10+"}
                        title="renowed chefs"
                    />
                    <Number
                        img={team}
                        number={"30+"}
                        title="Members"
                    />
                </GridWithThreeColumns>
            </Container>
        </div>
    )
}

export default Statistics