import React from 'react'
import AboutHero from './AboutHero'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Work from './Work'
import Faq from './Faq'
import NewsBlog from '../landingPage/NewsBlog'

const AboutPageMain = () => {
  return (
   <>
   <Header/>
   <AboutHero/>
   <Work/>
   <Faq/>
   <NewsBlog/>
<Footer/>   
   </>
  )
}

export default AboutPageMain