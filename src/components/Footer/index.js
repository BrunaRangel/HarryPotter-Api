import React from 'react'
import { Link } from 'gatsby'
import * as B from '../style/footer'

export function Footer() {
  return (
    <B.Container>
      <B.WrapFooter>
        <B.BoxNavigation>
          <B.TitleNavigation>Navegação</B.TitleNavigation>
          <B.Nav> 
          <Link to="/" style={{color:'#fff',textDecoration: 'none'}}>Home</Link>
          <Link to="" style={{color:'#fff',textDecoration: 'none'}}>Personagens</Link>
          <Link to="/Gryffindor" style={{color:'#fff',textDecoration: 'none'}}>Grifinória</Link>
          <Link to="/Slytherin" style={{color:'#fff',textDecoration: 'none'}}>Sonserina</Link>
          <Link to="/Ravenclaw" style={{color:'#fff',textDecoration: 'none'}}>Corvinal</Link>
          <Link to="/Hufflepuff" style={{color:'#fff',textDecoration: 'none'}}>Lufa-Lufa</Link>
        </B.Nav> 
        </B.BoxNavigation>       
      </B.WrapFooter>
      <B.BoxDeveloped>
        copyright Harry Potter custom - development by Bruna Rangel
      </B.BoxDeveloped>
    </B.Container>
  )
}
