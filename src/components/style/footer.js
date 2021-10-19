import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
border-top:2px solid #ffffff10;
margin-top: 3rem;
`
export const WrapFooter = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width:100%;
margin-bottom: 1rem;
gap:10rem;
`
export const BoxNavigation = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const TitleNavigation = styled.h3`
width:100%;
text-align:center;
font-size:0.9375rem;
color:#fff;
`
export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
font-size:0.875rem;
gap:5px;
`
export const Link = styled.a`
color:#FFF;
text-decoration:none;
&:hover {
    color:#6C7B8B;
}
`

export const BoxContact = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const TitleContact = styled.h3`
width:100%;
color:#fff;
text-align: center;
font-size:0.9375rem;
`

export const Contact = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:0.5rem;
`

export const BoxEmail = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100%;
height: 3vh;
gap:0.5rem;
`

export const Email = styled.p`
width:100%;
font-size:0.875rem;
color:#fff;
`

export const BoxInstagram = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width:100%;
height: 3vh;
gap:0.5rem;
`

export const BoxGithub = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width:100%;
height: 3vh;
gap:0.5rem;
cursor:point;
`

export const BoxDeveloped = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height:8vh;
width:80%;
border-top:1px solid #ffffff20;
color:#fff;
font-size:0.8125rem;
`