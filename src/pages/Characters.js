import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { api } from '../services/api'
import * as B from '../components/style/characters'

function Characters() {

 const [list, setList] = useState([])
 
 useEffect(() => {
     api.get()
        .then(response => setList(response.data))
        console.log(api.get())
 },[])

  return (
    <B.Container>
        <Header />
        <B.WrapCharacters>
            <B.BoxTitle>
                <B.Title>Personagens</B.Title>
            </B.BoxTitle>
            {/* <B.WrapFigure class="flip-container">
                {list.slice(0,25).map((item, index) => (
                    <B.BoxKey key={index} class="flipper">
                        <B.BoxImg class="front">
                            <img style={{width:'215px', height:'300px'}} src={item.image} alt=""  />
                        </B.BoxImg>
                        <B.BoxName>
                            <B.Name>{item.name}</B.Name>
                        </B.BoxName>                      
                    </B.BoxKey>
                     
                ))}
            </B.WrapFigure> */}

<B.WrapFigure>
    {list.slice(0,25).map((item, index) => (
    <B.WrapKey key={index}>
        <B.BoxFront style={{}}>
            <B.BoxImg>
                <img style={{width:'215px', height:'300px'}} src={item.image} alt=""  />
            </B.BoxImg>
            <B.BoxName>
                <B.Name>{item.name}</B.Name>
                <B.House>{item.house}</B.House>
            </B.BoxName>                     
        </B.BoxFront>
        <B.BoxBack style={{}}>
            <p style={{}}>oiuhg</p>
        </B.BoxBack>
    </B.WrapKey>
    ))}
</B.WrapFigure>
        </B.WrapCharacters>
        <Footer />
    </B.Container>
  )
}

export default Characters
