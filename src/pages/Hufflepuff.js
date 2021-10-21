import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { api } from '../services/api'
import * as B from '../components/style/hufflepuff'
import GlobalStyle from "../components/style/global ";
import flag  from '../images/Hufflepuff.jpg'

function Hufflepuff() {

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
        <B.WrapHufflepuff >
            <B.BoxTitle>
                <B.Title>Lufa-Lufa</B.Title>
            </B.BoxTitle>
            <B.BoxVerse>
                <B.Paragraph>"Quem sabe é na Lufa-Lufa que você vai morar,</B.Paragraph>
                <B.Paragraph>Onde seus moradores são justos e leais</B.Paragraph>
                <B.Paragraph>Pacientes, sinceros, sem medo da dor."</B.Paragraph>
                <B.Paragraph>— O Chapéu Seletor</B.Paragraph>
            </B.BoxVerse>  
            <B.BoxFoundation>
                <B.Foundation>A Lufa-Lufa, fundada por Helga Hufflepuff, 
                    é uma das quatro casas da Escola de Magia
                    e Bruxaria de Hogwarts, sendo conhecida
                    como a mais inclusiva entre as outras três; 
                    valorizando o trabalho árduo, a dedicação, 
                    a paciência, a lealdade e o jogo limpo ao 
                    invés de uma aptidão particular de seus membros.
                    Seu animal emblemático é um texugo e suas 
                    cores são o amarelo e o preto. A diretora 
                    da casa mais notável é a Mestra de Herbologia 
                    Pomona Sprout e seu fantasma patrono é o Frei Gorducho.</B.Foundation>
                <B.Foundation>A casa corresponde aproximadamente ao elemento terra,
                    e é por essa razão que suas cores foram escolhidas: 
                    o amarelo representa o trigo, enquanto o preto 
                    um símbolo do solo. Os estudantes classificados 
                    para a Lufa-Lufa comumente demonstram habilidades 
                    excepcionais em Herbologia, dado à correspondência 
                    da casa com a terra.</B.Foundation>
            </B.BoxFoundation>    
            <B.BoxImg>
               <B.Img src={flag} alt="" />
            </B.BoxImg>    
        </B.WrapHufflepuff>
        <Footer />
    </B.Container>
  )
}

export default Hufflepuff
