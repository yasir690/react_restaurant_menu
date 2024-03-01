

import React from 'react'
import { Card, CardBody } from 'react-bootstrap'

const Menucard = ({menu}) => {
  return (
    <div className='cardstyle'>
     {
       menu.map((item)=>{
       return(
        <Card style={{width:"18rem",marginBottom:"10px"}}>
        <Card.Img src={item.image}>
        </Card.Img>
        <CardBody>
          <Card.Title>
            {item.name}
          </Card.Title>
          <Card.Title>
            {item.price}
          </Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
        </CardBody>
      </Card>
       )
       })
     }
    </div>
  )
}

export default Menucard