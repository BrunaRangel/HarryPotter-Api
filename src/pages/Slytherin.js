import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { api } from '../services/api'
import * as B from '../components/style/slytherin'
import flag  from '../images/Slytherin.jpg'

function Slytherin() {

 const [list, setList] = useState([])
 
 useEffect(() => {
     api.get()
        .then(response => setList(response.data))
        console.log(api.get())
 },[])

  return (
    <B.Container>
        <Header />
        <B.WrapSlytherin>
            <B.BoxTitle>
                <B.Title>Sonserina</B.Title>
            </B.BoxTitle>
            <B.BoxVerse>
                <B.Paragraph>"Ou quem sabe a Sonserina será a sua casa</B.Paragraph>
                <B.Paragraph>E ali fará seus verdadeiros amigos,</B.Paragraph>
                <B.Paragraph>Homens de astúcia que usam quaisquer meios</B.Paragraph>
                <B.Paragraph>Para atingir os fins que antes colimaram."</B.Paragraph>
                <B.Paragraph>— O Chapéu Seletor</B.Paragraph>
            </B.BoxVerse>  
            <B.BoxFoundation>
                <B.Foundation>A Sonserina, fundada por Salazar Slytherin,
                    é uma das quatro casas da Escola de Magia 
                    e Bruxaria de Hogwarts. Ao estabelecer a casa, 
                    Salazar instruiu o Chapéu Seletor a escolher 
                    somente alunos que obtivessem algumas de suas
                    características particulares as quais ele prezava.
                    Entre elas incluem a astúcia, desenvoltura, 
                    liderança e ambição. Vários membros da Sonserina
                    possuem uma certa tendência em formar grupos, 
                    muitas vezes adquirindo líderes, o que exemplifica 
                    ainda mais as qualidades ambiciosas de Slytherin.</B.Foundation>
                <B.Foundation>O fundador, de acordo com o próprio Chapéu Seletor, 
                    valorizava e favorecia estudantes de sangue puro.
                    Entretanto, qualquer aluno que possui um status 
                    sanguíneo diferente, pode ser colocado na casa.</B.Foundation>
                <B.Foundation>Seu animal emblemático é uma serpente e suas cores
                    são verde e prata. Há dois diretores notáveis 
                    da Sonserina; Horácio Slughorn que assumiu o 
                    cargo duas vezes (primeiro se aposentou em 1981 
                    e retornou como diretor em 1997 até pouco 
                    antes de 2016) e Severo Snape. O fantasma 
                    patrono da casa é o Barão Sangrento.</B.Foundation>
                <B.Foundation>A Sonserina corresponde aproximadamente ao elemento
                    água, dado que as serpentes são comumente associadas 
                    aos mares e lagos na mitologia da Europa Ocidental, 
                    bem como por serem animais fisicamente fluidos e flexíveis.
                    Da mesma forma, na mitologia celta, a água é vista 
                    como um portal para outro mundo, levando a especulação
                    de que o elemento foi escolhido para simbolizar a 
                    esperança de vários Sonserinos por uma comunidade 
                    inteiramente "pura". Suas cores também se baseiam
                    nas águas ao redor de lagos — que por sua vez 
                    são frequentemente esverdeados — e prata para a 
                    associação da água cinzenta da chuva.</B.Foundation>

            </B.BoxFoundation>    
            <B.BoxImg>
               <B.Img src={flag} alt="" />
            </B.BoxImg>    
        </B.WrapSlytherin>
        <Footer />
    </B.Container>
  )
}

export default Slytherin
