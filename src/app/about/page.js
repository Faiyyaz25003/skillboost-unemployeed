import About from '@/Components/LandingPage/About/About'
import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import Navbar from '@/Components/LandingPage/Layout/Navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <About />
      <Footer/>
    </div>
  )
}

export default page
