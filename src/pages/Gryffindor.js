import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { api } from '../services/api'
import * as B from '../components/style/gryffindor'
import flag  from '../images/Gryffindor.jpg'

function Gryffindor() {

 const [list, setList] = useState([])
 
 useEffect(() => {
     api.get()
        .then(response => setList(response.data))
        console.log(api.get())
 },[])

  return (
    <B.Container>
        <Header />
        <B.WrapGryffindor>
            <B.BoxTitle>
                <B.Title>Grifinória</B.Title>
            </B.BoxTitle>
            <B.BoxVerse>
                <B.Paragraph>"Quem sabe sua morada é a Grifinória</B.Paragraph>
                <B.Paragraph>Casa onde habitam os corações indômitos.</B.Paragraph>
                <B.Paragraph>Ousadia e sangue-frio e nobreza</B.Paragraph>
                <B.Paragraph>Destacam os alunos da Grifinória dos demais."</B.Paragraph>
                <B.Paragraph>— O Chapéu Seletor</B.Paragraph>
            </B.BoxVerse>  
            <B.BoxFoundation>
                <B.Foundation>A Grifinória, fundada por Godrico Gryffindor, 
                    é uma das quatro casas da Escola de Magia e
                    Bruxaria de Hogwarts. Ao estabelecê-la, Godrico
                    instruiu o Chapéu Seletor a classificar estudantes
                    que obtivessem características as quais ele mais 
                    valorizava, como a coragem, o cavalheirismo e a determinação.
                    Suas cores são o escarlate e o ouro e seu animal
                     emblemático é um leão. Sir Nicholas de Mimsy-Porpington, 
                     também conhecido como "Nick Quase Sem Cabeça" 
                     é o fantasma patrono da casa.</B.Foundation>
                <B.Foundation>A casa corresponde aproximadamente ao elemento fogo,
                    e é por esta razão, que suas cores foram escolhidas;
                    elas também podem corresponder a um leão; com o escarlate
                    representando sua crina e cauda e o ouro simbolizando 
                    sua pelagem.</B.Foundation>
            </B.BoxFoundation>  
            <B.BoxImg>
               <B.Img src={flag} alt="" />
            </B.BoxImg>    
        </B.WrapGryffindor>
        <Footer />
    </B.Container>
  )
}

export default Gryffindor
