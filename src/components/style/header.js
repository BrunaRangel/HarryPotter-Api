import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
height:30vh;
border-bottom: 2px solid #fff;
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
width: 60%;
height:10vh;
display: flex;
justify-content: space-around;
align-items: center;
font-size:1.5rem;
cursor:point;
`
