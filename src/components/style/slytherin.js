import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
background-color:#1a472a;
`

export const WrapSlytherin = styled.div`
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
height:15vh;
`

export const Title = styled.h1`
color:#C3BDBD;
font-size:4rem;
&:hover {
    font-size:4.5rem;
    font-weight:700;
    }
`

export const BoxVerse = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:5px;
`

export const Paragraph = styled.p`
color:#C3BDBD;
font-size:1.25rem;
font-weight:600;
line-height:0px;
`

export const BoxFoundation = styled.div`
width:55%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:0px;
margin-top:2rem;
`

export const Foundation = styled.p`
color:#C3BDBD;
font-size:1.25rem;
line-height:25px;
text-indent:1.625rem;
`

export const BoxImg = styled.div`
width:40vw;
height:auto;
margin-top:2rem;
`
export const Img = styled.img`
width:100%;
border-radius:100px;
`