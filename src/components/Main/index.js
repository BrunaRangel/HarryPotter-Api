import React, { useState, useEffect} from "react";
import { api }  from "../../services/api"

export function Main() {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get()
            .then(response => setList(response.data))
        console.log(api.get())
    },[])

  return (
    <section>
        <div>
            <h2>Hogwarts</h2>
                <p>A Escola de Hogwarts é abrigada pelo Castelo de Hogwarts, 
                um grande castelo mágico localizado em um local desconhecido na
                Escócia, próximo a vila bruxa de Hogsmeade. O castelo
                possui terrenos extensos cobertos por gramas e arbustos
                com flores e hortas, um lago, uma floresta densa, várias 
                estufas e um estádio de Quadribol. O castelo também
                abriga um corujal, que abriga todas as corujas de 
                propriedade da escola e dos alunos. As três torres 
                mais altas são a Torre de Astronomia, a Torre da Grifinória
                e a Torre da Corvinal, respectivamente. Há 142 lances 
                de escada, que são conhecidas por se moverem, no castelo,
                que foi construído em enormes rochas sobre o lago negro.
                O castelo é conhecido pelas muitas mudanças que 
                sofreu em sua estrutura ao passar dos anos,graças à
                contribuição de um dos fundadores da escola, 
                Rowena Ravenclaw, assim como se reconstruir depois da
                Batalha de Hogwarts.
                Se algum trouxa se aproximar do castelo, só veria um 
                local em ruínas com um aviso de perigo. Também é 
                protegido por vários feitiços antigos e encantamentos 
                para proteger seus habitantes, fortes o suficiente 
                para resistir o efeitos do tabu.</p>

            <p>O brasão de Hogwarts mostra o animal símbolo de cada 
                casa e as cores da mesma. São eles, em sentido horário 
                do superior à esquerda: o leão da Grifinória, a cobra 
                da Sonserina, a águia da Corvinal e o texugo da Lufa-Lufa.
                Algumas salas da escola tendem a se mover, assim como 
                os degraus da Grande Escadaria. Alvo Dumbledore afirmou
                uma vez que não conhecia todos os segredos do castelo, 
                já que o local testemunhou séculos de magia antiga.</p>

            <p>A escola tem uma quantidade considerável de feitiços e 
                encantamentos ao seu redor para que não seja possível
                de se encontrar por um trouxa. Certas pessoas não podem 
                ver a escola, eles veem apenas ruínas e vários sinais 
                de aviso. Bruxas e bruxos não podem aparatar ou desaparatar
                em Hogwarts, exceto quando o diretor retira o encantamento.
                A eletricidade e dispositivos eletrônicos não funcionam 
                em Hogwarts. Os rádios, porém, são uma exceção. J. K. Rowling
                explica o fato dizendo que os rádios em Hogwarts não são 
                alimentado com eletricidade, e sim por magia.</p>
        </div>
    </section>
  )
}

