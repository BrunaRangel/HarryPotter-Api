import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { api } from '../services/api'
import * as B from '../components/style/ravenclaw'
import GlobalStyle from "../components/style/global ";
import flag  from '../images/Ravenclaw.jpg'


function Ravenclaw() {

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
        <B.WrapRavenclaw>
            <B.BoxTitle>
                <B.Title>Corvinal</B.Title>
            </B.BoxTitle>
            <B.BoxVerse>
                <B.Paragraph>"Ou será a velha e sábia Corvinal,</B.Paragraph>
                <B.Paragraph>A casa dos que têm a mente sempre alerta,</B.Paragraph>
                <B.Paragraph>Onde os homens de grande espírito e saber</B.Paragraph>
                <B.Paragraph>Sempre encontrarão companheiros seus iguais."</B.Paragraph>
                <B.Paragraph>— O Chapéu Seletor</B.Paragraph>
            </B.BoxVerse>  
            <B.BoxFoundation>
                <B.Foundation>A Corvinal, fundada por Rowena Ravenclaw,
                 é uma das quatro casas da Escola de Magia e
                 Bruxaria de Hogwarts. Seus membros, comumente,
                 são caracterizados por sua inteligência, aprendizado
                 e sabedoria. Suas cores são o azul e bronze,
                 o animal emblemático é uma águia e sua fantasma 
                 patrono é a Dama Cinzenta. A casa possui um 
                 diretor notável, o Mestre de Feitiços Fílio Flitwick.</B.Foundation>
                <B.Foundation>A casa corresponde aproximadamente ao elemento ar,
                 e é por essa razão que suas cores foram escolhidas;
                 o azul representa o céu e o bronze pode representar
                 as penas de uma águia, ambos tendo muita relação 
                 com tal elemento.</B.Foundation>
            </B.BoxFoundation>    
            <B.BoxImg>
               <B.Img src={flag} alt="" />
            </B.BoxImg>    
        </B.WrapRavenclaw>
        <Footer />
    </B.Container>
  )
}

export default Ravenclaw
