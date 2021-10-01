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
          <Link to="/" style={{color:'#fff',textDecoration: 'none'}}>Home</Link>
          <Link to="/Characters" style={{color:'#fff',textDecoration: 'none'}}>Personagens</Link>
          <Link to="" style={{color:'#fff',textDecoration: 'none'}}>Feitiços</Link>
          <Link to="/Gryffindor" style={{color:'#fff',textDecoration: 'none'}}>Grifinória</Link>
          <Link to="/Slytherin" style={{color:'#fff',textDecoration: 'none'}}>Sonserina</Link>
          <Link to="/Ravenclaw" style={{color:'#fff',textDecoration: 'none'}}>Corvinal</Link>
          <Link to="/Hufflepuff" style={{color:'#fff',textDecoration: 'none'}}>Lufa-Lufa</Link>
        </B.Nav> 
    </B.Container>
  )
}
