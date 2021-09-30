import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { api } from '../services/api'

function Hufflepuff() {

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
                <h1>Lufa-Lufa</h1>
            </div>
            <div>
                <p>"Quem sabe é na Lufa-Lufa que você vai morar,</p>
                <p>Onde seus moradores são justos e leais</p>
                <p>Pacientes, sinceros, sem medo da dor."</p>
                <p>— O Chapéu Seletor</p>
            </div>  
            <div>
                <p>A Lufa-Lufa, fundada por Helga Hufflepuff, 
                    é uma das quatro casas da Escola de Magia
                    e Bruxaria de Hogwarts, sendo conhecida
                    como a mais inclusiva entre as outras três; 
                    valorizando o trabalho árduo, a dedicação, 
                    a paciência, a lealdade e o jogo limpo ao 
                    invés de uma aptidão particular de seus membros.
                    Seu animal emblemático é um texugo e suas 
                    cores são o amarelo e o preto. A diretora 
                    da casa mais notável é a Mestra de Herbologia 
                    Pomona Sprout e seu fantasma patrono é o Frei Gorducho.</p>
                <p>A casa corresponde aproximadamente ao elemento terra,
                    e é por essa razão que suas cores foram escolhidas: 
                    o amarelo representa o trigo, enquanto o preto 
                    um símbolo do solo. Os estudantes classificados 
                    para a Lufa-Lufa comumente demonstram habilidades 
                    excepcionais em Herbologia, dado à correspondência 
                    da casa com a terra.</p>
            </div>    
            <div>
                {list.slice(5,6).map((item, index) => (
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

export default Hufflepuff
