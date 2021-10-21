import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import * as B from '../components/style/spell'
import GlobalStyle from "../components/style/global ";

export default function Spells() {

    const [spell, setSpell] = useState([
        {
            title:"Accio",
            type:"Encantamento",
            description:"Este feitiço é usado para convocar objetos, ou seja, trazê-los até você.",
            meaning:"No Latin, Accio significa eu acho ou eu convoco.",
        },
        {
            title:"Aguamenti",
            type:" Encantamento, Conjuração",
            description:"Conjura água potável cuja quantidade e potência do jato é controlada pelo bruxo.",
            meaning:" Parece misturar duas palavras do latim: aqua, que significa água, e mentis, que quer dizer mente.",
        },
        {
            title:"Aparatação",
            type:"Feitiço de transporte",
            description:"esse método mágico de transporte consiste basicamente em desaparecer em determinado local e aparecer em outro. Para realizá-lo com sucesso, é fundamental manter o foco no local para onde se quer ir, afim de evitar o chamado estrunchamento, quando alguma parte do corpo do viajante fica para trás ou quase se separa do corpo. Importante: apenas bruxos acima dos 16 anos têm permissão para aparatar.",
            meaning:"Da palavra em latim apparēre, que significa aparecer.",
        },
        {
            title:"Aqua Eructo",
            type:"Encanto",
            description:"Conjura um intenso jato de água, cuja força pode ser ampliada com a versão Aqua Eructo Duo.",
            meaning:"Do latim, aqua significa água, eructo significa descarregar violentamente.",
        },
        {
            title:"Feitiço de Cabeça de Bolha",
            type:"Encantamento",
            description:"Este feitiço cria uma bolha de ar em volta da cabeça de seu usuário, permitindo que o bruxo ou bruxa possa, por exemplo, respirar embaixo da água.",
            meaning:"Este feitiço também não teve suas palavras mágicas reveladas.",
        },
        {
            title:"Capacious Extremis",
            type:"Encantamento",
            description:"Usado para expandir o interior de um objeto aparentemente pequeno, sem que afete sua aparência exterior.",
            meaning:" Do inglês, Capacious significa espaçoso. Já extremis parece vir da palavra extremo do latim, cujo significado é o mesmo do português.",
        },
        {
            title:"Chamas azuis",
            type:"Feitiço",
            description:"Cria chamas azuis que emitem luz e calor e são à prova d'água.",
            meaning:"Nos livros, este feitiço não teve suas palavras mágicas reveladas. Nos filmes, ele foi substituído pelo Lacarnum Inflamarae, o Incendio e o Lumus Solem. Os dois primeiros, contudo, produzem fogo normal, enquanto o terceiro produz uma forte luminosidade e calor. Nos três primeiros jogos da saga, porém, o feitiço para chamas azuis ganhou as palavras Incendio Tria, cujo significado pode ser algo como fogo três, talvez indicando a potência do feitiço (chamas azuis são mais quentes que as vermelhas).",
        },
        {
            title:"Encanto Atmosférico",
            type:"Encantamento",
            description:"Usado para criar determinadas condições climáticas em uma espaço fechado.",
            meaning:"Embora seja visto na franquia, esse feitiço não teve suas palavras mágicas reveladas.",
        },
        {
            title:"Age Line",
            type:"Encantamento",
            description:"Desenha uma linha que impede a passagem de pessoas abaixo de determinada idade, para que apenas aqueles acima dessa faixa etária possam alcançar algo depois da linha.",
            meaning:"Do inglês, sua tradução é linha de idade. Não foram reveladas suas palavras mágicas.",
        },
        {
            title:"Feitiço anti-cola",
            type:"Feitiço",
            description:"Usado por professores e examinadores nas penas para impedir que estudantes compiem respostas de outros alunos ou colas.",
            meaning:"A palavra específica usada para fazer o feitiço não foi mostrada nos livros.",
        },
        {
            title:"Feitiço anti-desaparatação",
            type:"Azaração",
            description:"Feitiço usado para impedir que bruxos desaparatem (desaparecer e aparecer em outro local) de determinada área.",
            meaning:"",
        },
        {
            title:"Feitiço anti-intrusos",
            type:"Azaração",
            description:"Usado para impedir a entrada de inimigos em determinado local.",
            meaning:"A palavra específica usada para fazer o feitiço não foi mostrada nos livros.",
        },
        {
            title:"Alohomora",
            type:"Encanto",
            description:" Destranca portas trancadas por chaves ou travas físicas e feitiços de trancar. Contudo, pode não ser efetivo em portas seladas com feitiços específicos.",
            meaning:"O nome do encantamento vem do dialeto Sidiki, encontrado no oeste da África. A expressão significa amigável a ladrões.",
        },
        {
            title:"Anapneo",
            type:"Feitiço de cura",
            description:"Feitiço para desengasgar",
            meaning:"Do grego, significa Eu respiro.",
        },
        {
            title:"Arresto Momentum",
            type:"Encantamento",
            description:"Feitiço usado por um bruxa ou bruxa para diminuir a velocidade de um objeto e evitar, por exemplo, sua colisão com uma superfície.",
            meaning:"Do latim, arresto quer dizer deter; momentum significa momento, com o feitiço literalmente significando parar um momento.",
        },
        {
            title:"Azaração da vassoura",
            type:"Azaração",
            description:"A vassoura enfeitiçada por essa azaração tentará derrubar seus cavaleiros a todo custo, com movimentos bruscos em diferentes direções. Como outras azarações, para ser bem sucedida, é necessário que o bruxo ou bruxa mantenha contato visual o tempo inteiro e repita as palavras do encantamento.",
            meaning:"Não foram reveladas as palavras usadas neste feitiço.",
        },
        {
            title:"Bombarda",
            type:"Encanto",
            description:"Usado para destruir obstáculos. Pode ser intensificado com o uso do Bombarda Maxima.",
            meaning:"Do latim, significa bombardear.",
        },
        {
            title:"Brachiabindo",
            type:"Feitiço",
            description:"Usado para se ligar a um oponente por meio de cordas invisíveis. Seu contra-feitiço é Emancipare.",
            meaning:"Provável variação da palavra em latim brachialis, que significa conectado pelo braço.",
        },
        {
            title:"Carpe Retractum",
            type:"Encantamento",
            description:"Cria uma espécie de corda de luz retrátil que pode ser usada para puxar objetos até o bruxo ou para que o bruxo se puxe até algo.",
            meaning:"unção das palavras em latim carpe, que significa buscar e retractum, que quer dizer retirada.",
        },
        {
            title:"Cistem Aperio",
            type:"Encantamento",
            description:"Usado para forçar a abertura de determinados recipientes, como baús, caixas, entre outros.",
            meaning:"Junção das palavras em latim aperio - que significa abrir, descobrir ou revelar - e cistam - cujo significado é cesta ou caixa.",
        },
        {
            title:"Feitiço Grito de Gato",
            type:"Encantamento",
            description:"Uma espécie de feitiço alarme, encanta determinado espaço para que, caso alguém entre no local, dispare um alto barulho que muito se assemelha aos gritos de um gato.",
            meaning:"Não foram reveladas as palavras mágicas deste encantamento.",
        },
        {
            title:"Partis Temporus",
            type:"Encantamento",
            description:"Cria uma espécie de lacuna, uma passagem entre um obstáculo e o local a que se deseja chegar.",
            meaning:"Junção da palavra francesa partir, que significa sair, com a expressao em latim temporis, cujo significado é tempo.",
        },
        {
            title:"Periculum",
            type:"Encantamento",
            description:"Produz um jato de faíscas vermelhas que podem atingir grande altura no ar, como forma de avisar uma situação de perigo e sinalizar sua localização.",
            meaning:"Do latim, a palavra Periculum significa perigo.",
        },
        {
            title:"Petrificus Totalus",
            type:"Maldição",
            description:"Petrifica por completo o oponente temporariamente.",
            meaning:"Junção das palavras em latim petra (pedra), fieri (se tornar) e totalus (totalmente).",
        },
        {
            title:"Piertotum Locomotor",
            type:"Encantamento",
            description:"Proporciona o controle de grandes objetos inanimados, fazendo com que pareçam ganhar vida.",
            meaning:"Do latim, Pier significa amigo; Totum, inteiro; e locomotoz, o movimento de.",
        },
        {
            title:"Prior Incantato",
            type:"Encantamento",
            description:"Força a varinha encantada a revelar os feitiços que realizou do último até o primeiro.",
            meaning:"Do latim, prior significa prévio, anterior; e incantare, que quer dizer falar um feitiço.",
        },
        {
            title:"Priori Incantatem",
            type:"Encantamento",
            description:"Ligação que se desenvolve entre duas varinhas cujos núcleos tenham a mesma origem (varinhas irmãs), fazendo com que as varinhas revelem os últimos feitiços que realizou.",
            meaning:"Tem a mesma etimologia do feitiço anterior, significando falar feitiço prévio.",
        },
        {
            title:"Protego",
            type:"Encantamento",
            description:"Cria uma espécie de barreira invisível que atua como um escudo contra feitiços inimigos e pode chegar a espelhar esses feitiços contra o bruxo que os lançaram.",
            meaning:"Do latim, protego significa eu protejo.",
        },
        {
            title:"Amato Animo Animato Animagus",
            type:"Transfiguração",
            description:"ste feitiço faz parte do complicado processo necessário para um bruxo se tornar um animago (alguém com capacidade de se transformar em um animal). O encantamento deve ser dito ao nascer e ao pôr do sol, todos os dias antes de o bruxo consumir a poção Animagus. A poção, por sua vez, só deve ser tomada assim que uma tempestade de raios começa, e o encantamento é dito logo antes do consumo da poção e enquanto a ponta da varinha é posta sobre o coração daquele que se tornará um animago.",
            meaning:"Do latin, significa Meu amor me traz vida, e eu sou obrigado a me tornar um bruxo animal.",
        },
        {
            title:"Engorgio",
            type:" Encantamento",
            description:"Aumenta o tamanho físico do seu alvo.",
            meaning:"Do inglês, a palavra engorge significa inchar, crescer.",
        },
        {
            title:"Expecto Patronum",
            type:"Encantamento",
            description:"Este poderoso e avançado feitiço conjura uma espécie de espírito protetor, um guardião de magia capaz de proteger o bruxo de criaturas das trevas como Dementadores. Também pode ser usado para enviar mensagens entre bruxos. O patrono tem sempre a forma de um animal, sendo único para cada bruxo. A realização do feitiço exige grande concentração em memórias felizes.",
            meaning:"Do latim, Expecto significa eu espero. Já Patronus significaprotetor ou ainda, no latim arcaico, pai (o que parece ainda mais significativo para Harry, uma vez que seu patrono assume a forma de um cervo, animal no qual seu pai, o animago James Potter, conseguia se transformar).",
        },
        {
            title:"Expelliarmus",
            type:"Encantamento",
            description:"Feitiço para desarmar, usado para atirar longe qualquer coisa que o oponente estivesse segurando",
            meaning:"Não foram reveladas as palavras mágicas deste encantamento.",
        },
        {
            title:"Finite Incantatem",
            type:"Contra-feitiço",
            description:"Finaliza os efeitos de outros feitiços.",
            meaning:"Do latim, significa acabar encanto.",
        },
        {
            title:"Homenum Revelio",
            type:"Encantamento",
            description:"Revela a presença humana em determinado local.",
            meaning:"Do latim clássico, hominem significa humano. Já revelio significa revelar.",
        },
        {
            title:"Stupefy",
            type:"Encantamento",
            description:"Deixa o oponente inconsciente",
            meaning:"Do inglês, significa colocar em um estupor, em um estado vegetativo temporário.",
        },
        {
            title:"Alarte Ascendare",
            type:"Encanto",
            description:"Faz com que o objeto alvo seja lançado pelo ar.",
            meaning:"Do latin, Ascendere significa subir, escalar.",
        },
        {
            title:"Ascendio",
            type:"Encantamento",
            description:"Faz com que o usuário seja erguido para cima no ar.",
            meaning:"Do latim, ascendo significa escalar ou subir.",
        },
        {
            title:"Wingardium Leviosa",
            type:"Encantamento",
            description:"Usado para fazer objetos levitarem, esse feitiço permite que seu usuário controle os objetos escolhidos para levitar.",
            meaning:"unção da expressão inglesa to wing, que quer dizer voar, com a palavra em latim arduus, que significa elevado. Por completo, o significado do encantamento seria algo como levantar alto.",
        },
        {
            title:"Anteoculatia",
            type:"Azaração",
            description:"Este feitiço faz com que cresça uma galhada (chifres como de cervos) na cabeça do adversário).",
            meaning:"Sem palavras mágicas divulgadas.",
        },
        {
            title:"Cave Inimicum",
            type:"Encanto",
            description:"Esse feitiço de proteção cria uma espécie de escudo invisível que impede que inimigos vejam, ouçam ou mesmo sintam o cheiro daqueles que estão protegidos pela barreira mágica.",
            meaning:"Junção das palavras em latim caveo - que pode significar cuidado, evitar e ação de defesa - e inimicus - que significa inimigo.",
        },
        {
            title:"Confundus",
            type:"Encantamento",
            description:"Esse feitiço literalmente confunde a mente dos seres que são atingidos por ela. Há níveis de intensidade da confusão gerado pelo encantamento.",
            meaning:"Criado a partir de palavras em latim como confundo e confusus, significa confusão, desordem.",
        },
        {
            title:"Riddikulus",
            type:"Encantamento",
            description:"Feitiço usado para combater bicho-papão. Até hoje, não há registro na história bruxa de alguém que tenha visto a real forma de um bicho-papão, visto que a criatura assume a forma do maior medo daquele que o encontra de imediato. Para o feitiço ser efetivo, o bruxo ou bruxa precisa imaginar seu medo com alguma outra característica que o torne engraçado. O encantamento fará com que o essa característica seja adicionada à forma que o bicho-papão assumiu. O que realmente o combate são as risadas.",
            meaning:"Do latim, ridiculus significa risível, absurdo, ridículo.",
        },
        {
            title:"Obliviate",
            type:"Feitiço/encantamento",
            description:"Usado para apagar determinadas memórias de uma ou mais pessoas. É preciso ser feito com extrema cautela, pois seu uso errado pode causar danos permanentes e irreversíveis à memória da pessoa atingida. Pode ser desfeito.",
            meaning:"Do latim, significa obliviar, que quer dizer modificar ou apagar memórias.",
        },
        {
            title:"Locomotor Mortis",
            type:"Maldição",
            description:"Conhecido como feitiço das pernas presas, este feitiço cola as pernas do oponente uma a outra, prejudicando significantemente sua capacidade de movimento.",
            meaning:"Do latim, seu significado é algo como morte de locomoção.",
        },
        {
            title:"Lumus",
            type:"Feitiço",
            description:"Cria uma espécie de luz na ponta da varinha do bruxo ou bruxa, permitindo usar a varinha como uma lanterna. O feitiço para apagar a luz é o Nox. Já para aumentar a potência da luz, o bruxo pode optar pelo Lumus Maxima.",
            meaning:"Parece ser a mistura das palavras lux, do latim, e lume, do português, com ambas significando luz.",
        },
        {
            title:"Incarcerous",
            type:"Conjuração",
            description:"Usado para conjurar espécies de cabos, cordas, que prendem o oponente de imediato.",
            meaning:"Do latim, significa literalmente encarcerado.",
        },
        {
            title:"Morsmordre",
            type:"Encantamento",
            description:"Usado para criar a chamada Marca Negra, uma caveira de luz verde, com uma cobra saindo de sua boca. O sinal foi amplamente usado pelos Comensais da Morte sempre que cometiam assassinatos sob ordens de Voldemort. A imagem, inclusive, está tatuada no braço direito de todos aqueles que já tenham sido comensais do bruxo.",
            meaning:"Do idioma sueco, Morsmordre significa assassinato de mãe.",
        },
        {
            title:"Abaffiato",
            type:"Encantamento",
            description:"Esse feitiço é usado por bruxos quando eles querem evitar ser ouvidos por outras pessoas próximas. Seu uso lança uma espécie de zumbido para os ouvidos dos enfeitiçados.",
            meaning:"Acredita-se que, assim como a palavra abafar, tenha uma possível origem no idioma fenício, significando cobrir para proteger.",
        },
        {
            title:"Levicorpus",
            type:"Azaração de levitação",
            description:"Faz com que o inimigo seja puxado para cima no ar pelo tornozelo. A contra-azaração é o Liberacorpus.",
            meaning:"União das palavras em Latim levare, cujo significado é levantar, e corpus, que significa corpo.",
        },
        {
            title:"Sectumsempra",
            type:"Maldição",
            description:"Lacera o oponente com um golpe profundo, causando uma hemorragia que pode levar à morte.",
            meaning:"Junção das palavras em latim Sectum, que significa cortar e semper, cujo significado é sempre.",
        },
        {
            title:"Imperius",
            type:"Maldição",
            description:"Deixa a vítima em um estado hipnótico e subserviente, estando sujeito a obedecer qualquer tipo de ordem.",
            meaning:"Sua origem é a palavra em latim impero, que significa eu comando.",
        },
        {
            title:"Cruciatus",
            type:"Maldição",
            description:"Conhecida como maldição da tortura, provoca fortes dores em todo o corpo do oponente.",
            meaning:"Do latim, crucio significa eu torturo.",
        },
        {
            title:"Avada Kedrava",
            type:" Maldição",
            description:"Maldição da morte, mata o oponente atingido.",
            meaning:"Inspiração para a maldição foi o feitiço arcaico do Aramaico visto em tantas histórias: Avada Kedrava eram as palavras originais do popular abracadabra. Seu significado é deixe que a coisa seja destruída.",
        },
    ]);
        
return (
    <B.Container>
        <GlobalStyle />
        <Header />
        <B.WrapSpell>
            <B.BoxTitle>
                <B.Title>Feitiços</B.Title>
            </B.BoxTitle>  
            <B.BoxSpell>
                {spell.map((item, index) => (
                    <B.Key key={index}>
                        <B.ItemTitle>{item.title}</B.ItemTitle>
                        <B.Item><B.Span>Tipo:</B.Span>{item.type}</B.Item>
                        <B.Item><B.Span>Descrição:</B.Span>{item.description}</B.Item>
                        <B.Item><B.Span>Significado:</B.Span>{item.meaning}</B.Item>
                    </B.Key>
                
                ))}
            </B.BoxSpell>
         </B.WrapSpell>
         <Footer />
    </B.Container> 
 );
}