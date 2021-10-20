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
gap:1.5rem;
flex-wrap:wrap;
justify-content:center;
width:100%;
`

export const WrapKey = styled.div`

display:flex;
gap:1rem;
flex-wrap:wrap;
justify-content:center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
    &:hover{
        transform: rotateY(180deg);
    }
`

export const BoxFront = styled.div`
background-color:#223;
cursor: point;
position: absolute;
width: 220px;
height: 350px;
backface-visibility: hidden;

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
flex-direction:column;
background-color:#DAA520;
height:50px;
width:227px;
`

export const Name = styled.h2`
font-size:1.2rem;
font-weight:700;
margin:0px;
`

export const House = styled.p`
font-size:0.8125rem;
font-weight:600;
margin:0px;
`

export const BoxBack = styled.div`
transform: rotateY(180deg);
background-color: #DAA520;
width: 215px;
height: 350px;
backface-visibility: hidden;
border:6px solid #DAA520;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

export const TextName = styled.p`
width:80%;
font-size:2rem;
font-weight:900;
text-align:center;
color:#000;
margin:0.5rem 0px;
`

export const BoxText = styled.div`
width:100%;
`

export const Text = styled.p`
font-size:0.875rem;
font-weight:900;
color:#000;
margin-left:0.5rem;
`

export const Span = styled.span`
font-size:0.9375rem;
font-weight:600;
color:#000;
margin-left:4px;
font-family: 'Roboto', sans-serif;
`