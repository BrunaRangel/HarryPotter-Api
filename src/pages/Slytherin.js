import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { api } from '../services/api'

function Slytherin() {

 const [list, setList] = useState([])
 
 useEffect(() => {
     api.get()
        .then(response => setList(response.data))
        console.log(api.get())
 },[])

  return (
    <section>
        <Header />
        <div>
            <div>
                <h1>Sonserina</h1>
            </div>
            <div>
                <p >"Ou quem sabe a Sonserina será a sua casa</p>
                <p>E ali fará seus verdadeiros amigos,</p>
                <p>Homens de astúcia que usam quaisquer meios</p>
                <p>Para atingir os fins que antes colimaram."</p>
                <p>— O Chapéu Seletor</p>
            </div>  
            <div>
                <p>A Sonserina, fundada por Salazar Slytherin,
                    é uma das quatro casas da Escola de Magia 
                    e Bruxaria de Hogwarts. Ao estabelecer a casa, 
                    Salazar instruiu o Chapéu Seletor a escolher 
                    somente alunos que obtivessem algumas de suas
                    características particulares as quais ele prezava.
                    Entre elas incluem a astúcia, desenvoltura, 
                    liderança e ambição. Vários membros da Sonserina
                    possuem uma certa tendência em formar grupos, 
                    muitas vezes adquirindo líderes, o que exemplifica 
                    ainda mais as qualidades ambiciosas de Slytherin.</p>
                <p>O fundador, de acordo com o próprio Chapéu Seletor, 
                    valorizava e favorecia estudantes de sangue puro.
                    Entretanto, qualquer aluno que possui um status 
                    sanguíneo diferente, pode ser colocado na casa.</p>
                <p>Seu animal emblemático é uma serpente e suas cores
                    são verde e prata. Há dois diretores notáveis 
                    da Sonserina; Horácio Slughorn que assumiu o 
                    cargo duas vezes (primeiro se aposentou em 1981 
                    e retornou como diretor em 1997 até pouco 
                    antes de 2016) e Severo Snape. O fantasma 
                    patrono da casa é o Barão Sangrento.</p>
                <p>A Sonserina corresponde aproximadamente ao elemento
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
                    associação da água cinzenta da chuva.</p>

            </div>    
            <div>
                {list.slice(3,4).map((item, index) => (
                    <div key={index}>
                        <img style={{width:'70px', height:'100px'}} src={item.image} alt=""  />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>    
        </div>
    </section>
  )
}

export default Slytherin
