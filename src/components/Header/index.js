import React from 'react'
import * as B from '../style/header'
import { Link } from 'gatsby'

export function Header() {
  return (
    <B.Container>
        <B.BoxTitle>
          <B.Title>Harry Potter</B.Title>
        </B.BoxTitle>
        <B.Nav> 
          <B.Link to="/" >Home</B.Link>
          <B.Link to="/Characters">Personagens</B.Link>
          {/*<B.Link to="/Spell">Feitiços</B.Link>*/}
          <B.Link to="/Gryffindor">Grifinória</B.Link>
          <B.Link to="/Slytherin">Sonserina</B.Link>
          <B.Link to="/Ravenclaw">Corvinal</B.Link>
          <B.Link to="/Hufflepuff">Lufa-Lufa</B.Link>
        </B.Nav> 
    </B.Container>
  )
}
