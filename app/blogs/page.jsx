import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroHalf from '@/components/HeroHalf'
import React from 'react'
import Blog from './components/Blog'
import Subscribe from '../components/Subscribe'
import Contact from '../components/Contact'
import { Metadata } from 'next'

export const metadata = {
  title: 'Blogs | Morph Digital - Insights & Updates',
  description: 'Stay updated with the latest insights, tips, and updates from Morph Digital. Read our expert articles on web development, digital marketing, and business growth.',
  keywords: 'blogs, articles, web development, digital marketing, business insights, Morph Digital',
  openGraph: {
    title: 'Blogs | Morph Digital',
    description: 'Stay updated with the latest insights and updates from Morph Digital.',
    type: 'website',
  },
}

function page() {
  return (
    <div className="min-h-screen">
        <Header />
        <HeroHalf>Latest Blogs & Insights</HeroHalf>
        <Blog />
        <div className="bg-gradient-to-b from-slate-50 to-white">
          <Contact />
        </div>
        <div className="h-16"></div>
        <Subscribe />
        <Footer />
    </div>
  )
}

export default page
