import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
background-color:#081a2f;
`

export const BoxTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100%;
height:15vh;
`

export const Title = styled.h1`
color:#FFF;
font-size:4rem;
&:hover {
    font-size:4.5rem;
    font-weight:700;
    }
`
export const WrapSpell = styled.div`
width:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`

export const BoxSpell = styled.div`
width:80%;
`

export const Key = styled.div`
width:100%;
margin-bottom:4rem;
`

export const ItemTitle = styled.h2`
font-size:2rem;
font-weight:900;
color:#48fff8;
margin: 1rem 2rem 0px;
`

export const Item = styled.p`
font-size:1.2rem;
font-weight:500;
color:#FFF;
margin:0.5rem;
`

export const Span = styled.span`
font-size:1.25rem;
font-weight:900;
color:#48fff8;
margin-right:0.5rem;
`