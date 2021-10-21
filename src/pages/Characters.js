import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { api } from '../services/api'
import * as B from '../components/style/characters'
import GlobalStyle from "../components/style/global ";


function Characters() {

 const [list, setList] = useState([])
 
 useEffect(() => {
     api.get()
        .then(response => setList(response.data))
        console.log(api.get())
 },[])

  return (
    <B.Container>
        <GlobalStyle />
        <Header />
        <B.WrapCharacters>
            <B.BoxTitle>
                <B.Title>Personagens</B.Title>
            </B.BoxTitle>
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
                        <B.TextName>{item.name}</B.TextName>
                        <B.BoxText>
                            <B.Text>Date of birth:<B.Span>{item.dateOfBirth}</B.Span></B.Text>
                            <B.Text>Species:<B.Span>{item.species}</B.Span></B.Text>   
                            <B.Text>Gender:<B.Span>{item.gender}</B.Span></B.Text>
                            <B.Text>Ancestry:<B.Span>{item.ancestry}</B.Span></B.Text>
                            <B.Text>Hair Colour:<B.Span>{item.hairColour}</B.Span></B.Text>
                            <B.Text>Eye colour:<B.Span>{item.eyeColour}</B.Span></B.Text>         
                            <B.Text>Patronus:<B.Span>{item.patronus}</B.Span></B.Text>
                        </B.BoxText>
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
