import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Whyus from '../components/whyus'
import Menu from '../components/menu'
import Reserve from '../components/reserve'
import Footer from '../components/footer'
const home = () => {
  return (
   <>
     <Header/>
     <Hero/>
     <About/>
     <Whyus/>
     <Menu/>
     <Reserve/>
     <Footer/>
   </>
  )
}

export default home