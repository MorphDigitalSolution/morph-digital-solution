import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroHalf from '@/components/HeroHalf'
import React from 'react'
import Blog from './components/Blog'
import Subscribe from '../components/Subscribe'

function page() {
  return (
    <div>
        <Header />
        <HeroHalf>Blogs</HeroHalf>
        <Blog />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default page
