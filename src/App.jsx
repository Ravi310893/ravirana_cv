import React from 'react'
import Abouts from './copmonents/about/Abouts'
import Header from './copmonents/header/Header'
import Nav from './copmonents/nav/Nav'
import Expe from './copmonents/experience/Expe'
import Services from './copmonents/services/Services'
import Contact from './copmonents/contact/Contact'
import Portfolio from './copmonents/portfolio/Portfolio'
import Testimonials from './copmonents/testimonials/Testimonials'
import Footer from './copmonents/footer/Footer'
const port = process.env.port || 8000

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <Abouts/>
        <Expe/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      
    </div>
  )
}

export default App