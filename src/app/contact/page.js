import Contact from '@/Components/LandingPage/Contact/Contact'
import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import Navbar from '@/Components/LandingPage/Layout/Navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default page
