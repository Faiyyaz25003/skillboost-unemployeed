import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import Navbar from '@/Components/LandingPage/Layout/Navbar/Navbar'
import Trainner from '@/Components/LandingPage/Trainner/Trainner'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Trainner />
      <Footer/>
    </div>
  )
}

export default page
