import React from 'react'
import  {StyledCard} from '../styled/Cards.styled'
function Cards({item:{id, title, body, image}}) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'} >

    <div>
    <h2>{title}</h2>
    <p>{body}</p>
    </div>

    <div>
    <img src={`./images/${image}`} alt='no-img'/>
    </div>

    </StyledCard>
  )
}

export default Cards