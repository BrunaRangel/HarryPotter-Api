import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
height:30vh;
border-bottom: 2px solid #ffffff10;
`

export const BoxTitle = styled.div`
width:100%;
height:20vh;
display: flex;
align-items: center;
justify-content: center;
`

export const Title = styled.h1`
color: #fff;
font-size:6rem;
&:hover {
color:transparent;    
}
`

export const Nav = styled.nav`
width: 70%;
height:10vh;
display: flex;
justify-content: space-around;
align-items: center;
font-size:1.5rem;
font-weight:600;
cursor:point;
`
export const Link = styled.a`
color:#FFF;
text-decoration:none;
&:hover {
    color:#6C7B8B;
}
`