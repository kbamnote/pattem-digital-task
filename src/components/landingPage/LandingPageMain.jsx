import React from 'react'
import Header from '../common/Header'
import HeroSection from './HeroSection'
import CompanyLogos from './CompanyLogos'
import RecentJobs from './RecentJobs'
import Categories from './Categories'
import TopCompany from './TopCompany'
import About from './About'
import Testimonials from './Testimonials'
import NewsBlog from './NewsBlog'
import Footer from '../common/Footer'

const LandingPageMain = () => {
  return (
   <>
   <Header/>
   <HeroSection/>
   <CompanyLogos/>
   <RecentJobs/>
   <Categories/>
   <TopCompany/>
   <About/>
   <Testimonials/>
   <NewsBlog/>
   <Footer/>
   </>
  )
}

export default LandingPageMain