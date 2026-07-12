import About from '@/Components/About/About'
import Footer from '@/Components/Layout/Footer/Footer'
import Navbar from '@/Components/Layout/Navbar/Navbar'
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
