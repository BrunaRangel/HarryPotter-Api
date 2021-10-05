import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
background-color:#000;
`

export const WrapCharacters = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
`
export const BoxTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100%;
`
export const Title = styled.h1`
color:#fff;
font-size:3.5rem;
`

export const WrapFigure = styled.div`
display:flex;
gap:1rem;
flex-wrap:wrap;
justify-content:center;
`

export const BoxKey = styled.div`
transform: scale(0.9);
transition: all aese 0.2s;
cursor: point;
&:hover{
    transform: scale(1);
}
`

export const BoxImg = styled.div`
width:215px;
height:300px;
display:flex;
border:6px solid #DAA520;
`

export const BoxName = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:#DAA520;
height:6vh;
`

export const Name = styled.h2`
font-size:1.2rem;
`