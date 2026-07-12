import Contact from '@/Components/Contact/Contact'
import Footer from '@/Components/Layout/Footer/Footer'
import Navbar from '@/Components/Layout/Navbar/Navbar'
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
