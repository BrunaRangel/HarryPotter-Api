import React from 'react'

export function Header() {
  return (
    <section style={{width:"100%", height:'15vh', display:'flex', gap:'5rem'}}>
        <nav> 
            <a href="/">Home</a>
            <a href="">Sobre</a>
        </nav> 
        <nav> 
            <a href="/Gryffindor">Grifinória</a>
            <a href="/Slytherin">Sonserina</a>
            <a href="/Hufflepuff">Lufa-Lufa</a>
            <a href="/Ravenclaw">Corvinal</a>
        </nav> 
    </section>
  )
}
