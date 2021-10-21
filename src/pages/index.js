import * as React from "react"
import  { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from "../components/Footer"
import GlobalStyle from "../components/style/global ";

const IndexPage = () => (
  <section style={{background: 'linear-gradient(115deg, rgba(0,0,0,1) 1%, rgba(54,51,45,1) 43%, rgba(4,4,4,1) 100%)'}}>
    <Header />
    <Main />
    <Footer />
    <GlobalStyle />
  </section>
)

export default IndexPage
