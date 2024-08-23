import Header from '@/components/Header'
import React from 'react'
import HeroHalf from '@/components/HeroHalf'
import AboutUs from './components/AboutUs'
import Footer from '@/components/Footer'
import Team from '../components/Team'

function page() {
  return (
    <div>
        <Header />
        <HeroHalf>About Us</HeroHalf>
        <AboutUs />
        <Team />
        <Footer />
    </div>
  )
}

export default page
