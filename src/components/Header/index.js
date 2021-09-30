import React from 'react'

export function Header() {
  return (
    <section style={{width:"100%", height:'15vh', display:'flex', gap:'5rem'}}>
        <nav> 
            <a href="">Início</a>
            <a href="">Sobre</a>
        </nav> 
        <nav> 
            <a href="/Gryffindor">Grifinória</a>
            <a href="">Sonserina</a>
            <a href="">Lufa-Lufa</a>
            <a href="">Corvinal</a>
        </nav> 
    </section>
  )
}
