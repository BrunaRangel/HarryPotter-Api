import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { api } from '../services/api'

function Ravenclaw() {

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
                <h1>Corvinal</h1>
            </div>
            <div>
                <p >"Ou será a velha e sábia Corvinal,</p>
                <p>A casa dos que têm a mente sempre alerta,</p>
                <p>Onde os homens de grande espírito e saber</p>
                <p>Sempre encontrarão companheiros seus iguais."</p>
                <p>— O Chapéu Seletor</p>
            </div>  
            <div>
                <p>A Corvinal, fundada por Rowena Ravenclaw,
                 é uma das quatro casas da Escola de Magia e
                 Bruxaria de Hogwarts. Seus membros, comumente,
                 são caracterizados por sua inteligência, aprendizado
                 e sabedoria. Suas cores são o azul e bronze,
                 o animal emblemático é uma águia e sua fantasma 
                 patrono é a Dama Cinzenta. A casa possui um 
                 diretor notável, o Mestre de Feitiços Fílio Flitwick.</p>
                <p>A casa corresponde aproximadamente ao elemento ar,
                 e é por essa razão que suas cores foram escolhidas;
                 o azul representa o céu e o bronze pode representar
                 as penas de uma águia, ambos tendo muita relação 
                 com tal elemento.</p>
            </div>    
            <div>
                {list.slice(10,11).map((item, index) => (
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

export default Ravenclaw
