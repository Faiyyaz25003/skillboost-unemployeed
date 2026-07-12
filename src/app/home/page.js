import Home from '@/Components/LandingPage/Home/Home'
import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import Navbar from '@/Components/LandingPage/Layout/Navbar/Navbar'

import React from 'react'

const page = () => {
  return (
      <div>
          <Navbar/>
          <Home />
          <Footer/>
    </div>
  )
}

export default page
