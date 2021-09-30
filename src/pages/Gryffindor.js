import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { api } from '../services/api'

function Gryffindor() {

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
                <h1>Grifinória</h1>
            </div>
            <div>
                <p >"Quem sabe sua morada é a Grifinória</p>
                <p>Casa onde habitam os corações indômitos.</p>
                <p>Ousadia e sangue-frio e nobreza</p>
                <p>Destacam os alunos da Grifinória dos demais."</p>
                <p>— O Chapéu Seletor</p>
            </div>  
            <div>
                <p>A Grifinória, fundada por Godrico Gryffindor, 
                    é uma das quatro casas da Escola de Magia e
                    Bruxaria de Hogwarts. Ao estabelecê-la, Godrico
                    instruiu o Chapéu Seletor a classificar estudantes
                    que obtivessem características as quais ele mais 
                    valorizava, como a coragem, o cavalheirismo e a determinação.
                    Suas cores são o escarlate e o ouro e seu animal
                     emblemático é um leão. Sir Nicholas de Mimsy-Porpington, 
                     também conhecido como "Nick Quase Sem Cabeça" 
                     é o fantasma patrono da casa.</p>
                <p>A casa corresponde aproximadamente ao elemento fogo,
                    e é por esta razão, que suas cores foram escolhidas;
                    elas também podem corresponder a um leão; com o escarlate
                    representando sua crina e cauda e o ouro simbolizando 
                    sua pelagem.</p>
            </div>    
            <div>
                {list.slice(0,3).map((item, index) => (
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

export default Gryffindor
