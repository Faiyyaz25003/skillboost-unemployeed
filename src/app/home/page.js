import Home from '@/Components/Home/Home'
import Footer from '@/Components/Layout/Footer/Footer'
import Navbar from '@/Components/Layout/Navbar/Navbar'

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
